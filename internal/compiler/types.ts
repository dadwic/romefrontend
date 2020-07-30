/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	AnalyzeDependencyResult,
	BundlerMode,
	FileReference,
} from "@romefrontend/core";
import {Path} from "@romefrontend/compiler";
import {AnyRoot} from "@romefrontend/ast";
import {ProjectConfig} from "@romefrontend/project";
import {EnterSignal, ExitSignal} from "./signals";
import CompilerContext from "./lib/CompilerContext";
import {AbsoluteFilePath} from "@romefrontend/path";
import {SourceMap} from "@romefrontend/codec-source-map";
import {Dict} from "@romefrontend/typescript-helpers";
import {DiagnosticCategory} from "@romefrontend/diagnostics";

//
export type TransformStageName = "pre" | "compile" | "compileForBundle";

export type TransformStageFactory = (
	projectConfig: ProjectConfig,
	options: Object,
) => Transforms;

export type TransformStageFactories = {
	[key in TransformStageName]: TransformStageFactory
};

//
export type Transform =
	| TransformVisitor
	| ((context: CompilerContext) => TransformVisitor);

export type Transforms = Array<Transform>;

export interface TransformVisitor {
	name: string;
	enter?: (path: Path) => EnterSignal;
	exit?: (path: Path) => ExitSignal;
}
export type TransformVisitors = Array<TransformVisitor>;

export type CompileRequest = TransformRequest & {
	inputSourceMap?: SourceMap;
};

export type LintRequest = TransformRequest & {
	applyRecommendedFixes: boolean;
};

export type TransformProjectDefinition = {
	config: ProjectConfig;
	directory: undefined | AbsoluteFilePath;
};

export type TransformRequest = {
	ref?: FileReference;
	sourceText: string;
	ast: AnyRoot;
	project: TransformProjectDefinition;
	options: CompilerOptions;
	stage?: TransformStageName;
};

export type BundleCompileResolvedImports = {
	[key: string]: {
		id: string;
		name: string;
	};
};

export type BundleCompileOptions = {
	mode: BundlerMode;
	moduleAll: boolean;
	moduleId: string;
	analyze: AnalyzeDependencyResult;
	relativeSourcesToModuleId: Dict<string>;
	resolvedImports: BundleCompileResolvedImports;
	assetPath: undefined | string;
};

export type LintCompilerOptions = {
	hasDecisions?: boolean;
	globalDecisions?: LintCompilerOptionsDecisions;
	decisionsByPosition?: Dict<LintCompilerOptionsDecisions>;
};

export type LintCompilerOptionsDecisions = Array<LintCompilerOptionsDecision>;

export type LintCompilerOptionsDecisionAction = "suppress" | "fix" | "ignore";

export type LintCompilerOptionsDecision = {
	action: LintCompilerOptionsDecisionAction;
	category: DiagnosticCategory;
	id?: number;
};

export type CompilerOptions = {
	bundle?: BundleCompileOptions;
	lint?: LintCompilerOptions;
};