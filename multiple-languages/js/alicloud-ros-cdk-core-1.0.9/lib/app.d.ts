import { Stage } from "./stage";
/**
 * Initialization props for apps.
 */
export interface AppProps {
    /**
     * Automatically call 'synth()' before the program exits.
     *
     * If you set this, you don't have to call 'synth()' explicitly. Note that
     * this feature is only available for certain programming languages, and
     * calling 'synth()' is still recommended.
     *
     * Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
     * otherwise
     */
    readonly autoSynth?: boolean;
    /**
     * The output directory into which to emit synthesized artifacts.
     *
     * Default - If this value is _not_ set, considers the environment variable 'CDK_OUTDIR'.
     *            If 'CDK_OUTDIR' is not defined, uses a temp directory.
     */
    readonly outdir?: string;
    /**
     * Include construct creation stack trace.
     * @default true stack traces are included unless related context is set.
     */
    readonly stackTraces?: boolean;
    /**
     * Include runtime versioning information
     * @default true runtime info is included unless related comtext is set.
     */
    readonly runtimeInfo?: boolean;
    /**
     * Additional context values for the application.
     *
     * Context set by the CLI or the 'context' key in 'cdk.json' has precedence.
     *
     * Context can be read from any construct using 'node.getContext(key)'.
     *
     * @default - no additional context
     */
    readonly context?: {
        [key: string]: string;
    };
    /**
     * Include construct tree metadata as part of the Cloud Assembly.
     *
     * @default true
     */
    readonly treeMetadata?: boolean;
}
/**
 * A construct which represents an entire CDK app. This construct is normally
 * the root of the construct tree.
 *
 * You would normally define an 'App' instance in your program's entrypoint,
 * then define constructs where the app is used as the parent scope.
 *
 * After all the child constructs are defined within the app, you should call
 * 'app.synth()' which will emit a "ros template" from this app into the
 * directory specified by 'outdir'.
 */
export declare class App extends Stage {
    /**
     * Checks if an object is an instance of the 'App' class.
     * Returns 'true' if 'obj' is an 'App'.
     * Param obj The object to evaluate
     */
    static isApp(obj: any): obj is App;
    /**
     * Initializes a CDK application.
     * @param props initialization properties
     */
    constructor(props?: AppProps);
    private loadContext;
}
//# sourceMappingURL=app.d.ts.map