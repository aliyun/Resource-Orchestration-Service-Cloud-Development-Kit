package com.aliyun.ros.cdk.ossdeployment;

/**
 * <code>BucketDeployment</code> populates an OSS bucket with the contents of .zip files from other OSS buckets or from local disk.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.871Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ossdeployment.$Module.class, fqn = "@alicloud/ros-cdk-ossdeployment.BucketDeployment")
public class BucketDeployment extends com.aliyun.ros.cdk.core.Resource {

    protected BucketDeployment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BucketDeployment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public BucketDeployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.BucketDeploymentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    public BucketDeployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossdeployment.BucketDeploymentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute cr: Custom resource to trigger the bucket deployment.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.RosCustomResource getCr() {
        return software.amazon.jsii.Kernel.get(this, "cr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.RosCustomResource.class));
    }

    /**
     * Attribute fcFunction: FC function to use to forward content to the destination bucket.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.Function getFcFunction() {
        return software.amazon.jsii.Kernel.get(this, "fcFunction", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.Function.class));
    }

    /**
     * Attribute fcService: FC service to use to forward content to the destination bucket.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.Service getFcService() {
        return software.amazon.jsii.Kernel.get(this, "fcService", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.Service.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Object getHandlerRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "handlerRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ossdeployment.BucketDeployment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ossdeployment.BucketDeployment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ossdeployment.BucketDeploymentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ossdeployment.BucketDeploymentProps.Builder();
        }

        /**
         * The OSS bucket to sync the contents of the zip file to.
         * <p>
         * @return {@code this}
         * @param destinationBucket The OSS bucket to sync the contents of the zip file to. This parameter is required.
         */
        public Builder destinationBucket(final java.lang.String destinationBucket) {
            this.props.destinationBucket(destinationBucket);
            return this;
        }
        /**
         * The OSS bucket to sync the contents of the zip file to.
         * <p>
         * @return {@code this}
         * @param destinationBucket The OSS bucket to sync the contents of the zip file to. This parameter is required.
         */
        public Builder destinationBucket(final com.aliyun.ros.cdk.core.IResolvable destinationBucket) {
            this.props.destinationBucket(destinationBucket);
            return this;
        }
        /**
         * The OSS bucket to sync the contents of the zip file to.
         * <p>
         * @return {@code this}
         * @param destinationBucket The OSS bucket to sync the contents of the zip file to. This parameter is required.
         */
        public Builder destinationBucket(final com.aliyun.ros.cdk.oss.Bucket destinationBucket) {
            this.props.destinationBucket(destinationBucket);
            return this;
        }

        /**
         * The sources from which to deploy the contents of this bucket.
         * <p>
         * @return {@code this}
         * @param sources The sources from which to deploy the contents of this bucket. This parameter is required.
         */
        public Builder sources(final java.util.List<? extends com.aliyun.ros.cdk.ossdeployment.ISource> sources) {
            this.props.sources(sources);
            return this;
        }

        /**
         * Whether log monitoring is enabled.
         * <p>
         * Enabling log monitoring allows you to record the details of your deployment,
         * which makes it easier to troubleshoot when something goes wrong.
         * <p>
         * Enabling logging monitoring incurs an additional logging service fee.
         * <p>
         * Default: - false
         * <p>
         * @return {@code this}
         * @param logMonitoring Whether log monitoring is enabled. This parameter is required.
         */
        public Builder logMonitoring(final java.lang.Boolean logMonitoring) {
            this.props.logMonitoring(logMonitoring);
            return this;
        }

        /**
         * If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket.
         * <p>
         * Otherwise, the temporary bucket will be deleted when the stack is destroyed.
         * <p>
         * Default: - false
         * <p>
         * @return {@code this}
         * @param retainOnCreate If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket. This parameter is required.
         */
        public Builder retainOnCreate(final java.lang.Boolean retainOnCreate) {
            this.props.retainOnCreate(retainOnCreate);
            return this;
        }

        /**
         * The ARN of the execution role associated with this function.
         * <p>
         * Default: -  A role is automatically created
         * <p>
         * @return {@code this}
         * @param roleArn The ARN of the execution role associated with this function. This parameter is required.
         */
        public Builder roleArn(final java.lang.String roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }
        /**
         * The ARN of the execution role associated with this function.
         * <p>
         * Default: -  A role is automatically created
         * <p>
         * @return {@code this}
         * @param roleArn The ARN of the execution role associated with this function. This parameter is required.
         */
        public Builder roleArn(final com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }

        /**
         * The timeout period in seconds for the function to run.
         * <p>
         * Default: - 60
         * <p>
         * @return {@code this}
         * @param timeout The timeout period in seconds for the function to run. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ossdeployment.BucketDeployment}.
         */
        @Override
        public com.aliyun.ros.cdk.ossdeployment.BucketDeployment build() {
            return new com.aliyun.ros.cdk.ossdeployment.BucketDeployment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
