package com.aliyun.ros.cdk.core;

/**
 * A construct which represents an entire CDK app. This construct is normally the root of the construct tree.
 * <p>
 * You would normally define an 'App' instance in your program's entrypoint,
 * then define constructs where the app is used as the parent scope.
 * <p>
 * After all the child constructs are defined within the app, you should call
 * 'app.synth()' which will emit a "ros template" from this app into the
 * directory specified by 'outdir'.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:17.638Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.App")
public class App extends com.aliyun.ros.cdk.core.Stage {

    protected App(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected App(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Initializes a CDK application.
     * <p>
     * @param props initialization properties.
     */
    public App(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.AppProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { props });
    }

    /**
     * Initializes a CDK application.
     */
    public App() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * Checks if an object is an instance of the 'App' class.
     * <p>
     * Returns 'true' if 'obj' is an 'App'.
     * Param obj The object to evaluate
     * <p>
     * @param obj This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isApp(final @org.jetbrains.annotations.NotNull java.lang.Object obj) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.App.class, "isApp", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { obj });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.App}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.App> {
        /**
         * @return a new instance of {@link Builder}.
         */
        public static Builder create() {
            return new Builder();
        }

        private com.aliyun.ros.cdk.core.AppProps.Builder props;

        private Builder() {
        }

        /**
         * Automatically call 'synth()' before the program exits.
         * <p>
         * If you set this, you don't have to call 'synth()' explicitly. Note that
         * this feature is only available for certain programming languages, and
         * calling 'synth()' is still recommended.
         * <p>
         * Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
         * otherwise
         * <p>
         * @return {@code this}
         * @param autoSynth Automatically call 'synth()' before the program exits. This parameter is required.
         */
        public Builder autoSynth(final java.lang.Boolean autoSynth) {
            this.props().autoSynth(autoSynth);
            return this;
        }

        /**
         * Additional context values for the application.
         * <p>
         * Context set by the CLI or the 'context' key in 'cdk.json' has precedence.
         * <p>
         * Context can be read from any construct using 'node.getContext(key)'.
         * <p>
         * Default: - no additional context
         * <p>
         * @return {@code this}
         * @param context Additional context values for the application. This parameter is required.
         */
        public Builder context(final java.util.Map<java.lang.String, java.lang.String> context) {
            this.props().context(context);
            return this;
        }

        /**
         * The output directory into which to emit synthesized artifacts.
         * <p>
         * Default - If this value is <em>not</em> set, considers the environment variable 'CDK_OUTDIR'.
         * If 'CDK_OUTDIR' is not defined, uses a temp directory.
         * <p>
         * @return {@code this}
         * @param outdir The output directory into which to emit synthesized artifacts. This parameter is required.
         */
        public Builder outdir(final java.lang.String outdir) {
            this.props().outdir(outdir);
            return this;
        }

        /**
         * Include runtime versioning information.
         * <p>
         * Default: true runtime info is included unless related comtext is set.
         * <p>
         * @return {@code this}
         * @param runtimeInfo Include runtime versioning information. This parameter is required.
         */
        public Builder runtimeInfo(final java.lang.Boolean runtimeInfo) {
            this.props().runtimeInfo(runtimeInfo);
            return this;
        }

        /**
         * Include construct creation stack trace.
         * <p>
         * Default: true stack traces are included unless related context is set.
         * <p>
         * @return {@code this}
         * @param stackTraces Include construct creation stack trace. This parameter is required.
         */
        public Builder stackTraces(final java.lang.Boolean stackTraces) {
            this.props().stackTraces(stackTraces);
            return this;
        }

        /**
         * Include construct tree metadata as part of the Cloud Assembly.
         * <p>
         * Default: true
         * <p>
         * @return {@code this}
         * @param treeMetadata Include construct tree metadata as part of the Cloud Assembly. This parameter is required.
         */
        public Builder treeMetadata(final java.lang.Boolean treeMetadata) {
            this.props().treeMetadata(treeMetadata);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.core.App}.
         */
        @Override
        public com.aliyun.ros.cdk.core.App build() {
            return new com.aliyun.ros.cdk.core.App(
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.AppProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.AppProps.Builder();
            }
            return this.props;
        }
    }
}
