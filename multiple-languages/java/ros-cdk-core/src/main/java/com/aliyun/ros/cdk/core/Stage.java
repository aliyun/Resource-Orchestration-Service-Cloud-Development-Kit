package com.aliyun.ros.cdk.core;

/**
 * An abstract application modeling unit consisting of Stacks that should be deployed together.
 * <p>
 * Derive a subclass of 'Stage' and use it to model a single instance of your
 * application.
 * <p>
 * You can then instantiate your subclass multiple times to model multiple
 * copies of your application which should be be deployed to different
 * environments.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:33.124Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Stage")
public class Stage extends com.aliyun.ros.cdk.core.Construct {

    protected Stage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Stage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public Stage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.StageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    public Stage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * (experimental) Test whether the given construct is a stage.
     * <p>
     * @param x This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isStage(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Stage.class, "isStage", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { x });
    }

    /**
     * (experimental) Return the stage this construct is contained with, if available.
     * <p>
     * If called
     * on a nested stage, returns its parent.
     * <p>
     * @param construct This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public static @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Stage of(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct construct) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Stage.class, "of", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stage.class), new Object[] { java.util.Objects.requireNonNull(construct, "construct is required") });
    }

    /**
     * Synthesize this stage into a cloud assembly.
     * <p>
     * Once an assembly has been synthesized, it cannot be modified. Subsequent
     * calls will return the same assembly.
     * <p>
     * @param options
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly synth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.StageSynthesisOptions options) {
        return software.amazon.jsii.Kernel.call(this, "synth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class), new Object[] { options });
    }

    /**
     * Synthesize this stage into a cloud assembly.
     * <p>
     * Once an assembly has been synthesized, it cannot be modified. Subsequent
     * calls will return the same assembly.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cxapi.CloudAssembly synth() {
        return software.amazon.jsii.Kernel.call(this, "synth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cxapi.CloudAssembly.class));
    }

    /**
     * (experimental) Artifact ID of the assembly if it is a nested stage. The root stage app will return an empty string.
     * <p>
     * Derived from the construct path.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.NotNull java.lang.String getArtifactId() {
        return software.amazon.jsii.Kernel.get(this, "artifactId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * (experimental) The name of the stage.
     * <p>
     * Based on names of the parent stages separated by
     * hypens.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.NotNull java.lang.String getStageName() {
        return software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * (experimental) The parent stage or 'undefined' if this is the app.
     * <p>
     * <ul>
     * <li></li>
     * </ul>
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Stage getParentStage() {
        return software.amazon.jsii.Kernel.get(this, "parentStage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stage.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.Stage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.Stage> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private com.aliyun.ros.cdk.core.StageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * The output directory into which to emit synthesized artifacts.
         * <p>
         * Can only be specified if this stage is the root stage the app. If this is
         * specified and this stage is nested within another stage, an error will be
         * thrown.
         * <p>
         * Default - for nested stages, outdir will be determined as a relative
         * directory to the outdir of the app. For apps, if outdir is not specified, a
         * temporary directory will be created.
         * <p>
         * @return {@code this}
         * @param outdir The output directory into which to emit synthesized artifacts. This parameter is required.
         */
        public Builder outdir(final java.lang.String outdir) {
            this.props().outdir(outdir);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.core.Stage}.
         */
        @Override
        public com.aliyun.ros.cdk.core.Stage build() {
            return new com.aliyun.ros.cdk.core.Stage(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.StageProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.StageProps.Builder();
            }
            return this.props;
        }
    }
}
