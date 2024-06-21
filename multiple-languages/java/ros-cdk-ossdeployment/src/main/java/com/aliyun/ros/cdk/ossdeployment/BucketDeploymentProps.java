package com.aliyun.ros.cdk.ossdeployment;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:13.132Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ossdeployment.$Module.class, fqn = "@alicloud/ros-cdk-ossdeployment.BucketDeploymentProps")
@software.amazon.jsii.Jsii.Proxy(BucketDeploymentProps.Jsii$Proxy.class)
public interface BucketDeploymentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * The OSS bucket to sync the contents of the zip file to.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationBucket();

    /**
     * The sources from which to deploy the contents of this bucket.
     */
    @org.jetbrains.annotations.NotNull java.util.List<com.aliyun.ros.cdk.ossdeployment.ISource> getSources();

    /**
     * Whether log monitoring is enabled.
     * <p>
     * Enabling log monitoring allows you to record the details of your deployment,
     * which makes it easier to troubleshoot when something goes wrong.
     * <p>
     * Enabling logging monitoring incurs an additional logging service fee.
     * <p>
     * Default: - false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getLogMonitoring() {
        return null;
    }

    /**
     * If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket.
     * <p>
     * Otherwise, the temporary bucket will be deleted when the stack is destroyed.
     * <p>
     * Default: - false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getRetainOnCreate() {
        return null;
    }

    /**
     * The ARN of the execution role associated with this function.
     * <p>
     * Default: -  A role is automatically created
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleArn() {
        return null;
    }

    /**
     * The timeout period in seconds for the function to run.
     * <p>
     * Default: - 60
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTimeout() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BucketDeploymentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BucketDeploymentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BucketDeploymentProps> {
        java.lang.Object destinationBucket;
        java.util.List<com.aliyun.ros.cdk.ossdeployment.ISource> sources;
        java.lang.Boolean logMonitoring;
        java.lang.Boolean retainOnCreate;
        java.lang.Object roleArn;
        java.lang.Number timeout;

        /**
         * Sets the value of {@link BucketDeploymentProps#getDestinationBucket}
         * @param destinationBucket The OSS bucket to sync the contents of the zip file to. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationBucket(java.lang.String destinationBucket) {
            this.destinationBucket = destinationBucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getDestinationBucket}
         * @param destinationBucket The OSS bucket to sync the contents of the zip file to. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationBucket(com.aliyun.ros.cdk.core.IResolvable destinationBucket) {
            this.destinationBucket = destinationBucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getDestinationBucket}
         * @param destinationBucket The OSS bucket to sync the contents of the zip file to. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationBucket(com.aliyun.ros.cdk.oss.Bucket destinationBucket) {
            this.destinationBucket = destinationBucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getSources}
         * @param sources The sources from which to deploy the contents of this bucket. This parameter is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder sources(java.util.List<? extends com.aliyun.ros.cdk.ossdeployment.ISource> sources) {
            this.sources = (java.util.List<com.aliyun.ros.cdk.ossdeployment.ISource>)sources;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getLogMonitoring}
         * @param logMonitoring Whether log monitoring is enabled.
         *                      Enabling log monitoring allows you to record the details of your deployment,
         *                      which makes it easier to troubleshoot when something goes wrong.
         *                      <p>
         *                      Enabling logging monitoring incurs an additional logging service fee.
         * @return {@code this}
         */
        public Builder logMonitoring(java.lang.Boolean logMonitoring) {
            this.logMonitoring = logMonitoring;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getRetainOnCreate}
         * @param retainOnCreate If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket.
         *                       Otherwise, the temporary bucket will be deleted when the stack is destroyed.
         * @return {@code this}
         */
        public Builder retainOnCreate(java.lang.Boolean retainOnCreate) {
            this.retainOnCreate = retainOnCreate;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getRoleArn}
         * @param roleArn The ARN of the execution role associated with this function.
         * @return {@code this}
         */
        public Builder roleArn(java.lang.String roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getRoleArn}
         * @param roleArn The ARN of the execution role associated with this function.
         * @return {@code this}
         */
        public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link BucketDeploymentProps#getTimeout}
         * @param timeout The timeout period in seconds for the function to run.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BucketDeploymentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BucketDeploymentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BucketDeploymentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BucketDeploymentProps {
        private final java.lang.Object destinationBucket;
        private final java.util.List<com.aliyun.ros.cdk.ossdeployment.ISource> sources;
        private final java.lang.Boolean logMonitoring;
        private final java.lang.Boolean retainOnCreate;
        private final java.lang.Object roleArn;
        private final java.lang.Number timeout;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationBucket = software.amazon.jsii.Kernel.get(this, "destinationBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sources = software.amazon.jsii.Kernel.get(this, "sources", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ossdeployment.ISource.class)));
            this.logMonitoring = software.amazon.jsii.Kernel.get(this, "logMonitoring", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.retainOnCreate = software.amazon.jsii.Kernel.get(this, "retainOnCreate", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationBucket = java.util.Objects.requireNonNull(builder.destinationBucket, "destinationBucket is required");
            this.sources = (java.util.List<com.aliyun.ros.cdk.ossdeployment.ISource>)java.util.Objects.requireNonNull(builder.sources, "sources is required");
            this.logMonitoring = builder.logMonitoring;
            this.retainOnCreate = builder.retainOnCreate;
            this.roleArn = builder.roleArn;
            this.timeout = builder.timeout;
        }

        @Override
        public final java.lang.Object getDestinationBucket() {
            return this.destinationBucket;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ossdeployment.ISource> getSources() {
            return this.sources;
        }

        @Override
        public final java.lang.Boolean getLogMonitoring() {
            return this.logMonitoring;
        }

        @Override
        public final java.lang.Boolean getRetainOnCreate() {
            return this.retainOnCreate;
        }

        @Override
        public final java.lang.Object getRoleArn() {
            return this.roleArn;
        }

        @Override
        public final java.lang.Number getTimeout() {
            return this.timeout;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationBucket", om.valueToTree(this.getDestinationBucket()));
            data.set("sources", om.valueToTree(this.getSources()));
            if (this.getLogMonitoring() != null) {
                data.set("logMonitoring", om.valueToTree(this.getLogMonitoring()));
            }
            if (this.getRetainOnCreate() != null) {
                data.set("retainOnCreate", om.valueToTree(this.getRetainOnCreate()));
            }
            if (this.getRoleArn() != null) {
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ossdeployment.BucketDeploymentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BucketDeploymentProps.Jsii$Proxy that = (BucketDeploymentProps.Jsii$Proxy) o;

            if (!destinationBucket.equals(that.destinationBucket)) return false;
            if (!sources.equals(that.sources)) return false;
            if (this.logMonitoring != null ? !this.logMonitoring.equals(that.logMonitoring) : that.logMonitoring != null) return false;
            if (this.retainOnCreate != null ? !this.retainOnCreate.equals(that.retainOnCreate) : that.retainOnCreate != null) return false;
            if (this.roleArn != null ? !this.roleArn.equals(that.roleArn) : that.roleArn != null) return false;
            return this.timeout != null ? this.timeout.equals(that.timeout) : that.timeout == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationBucket.hashCode();
            result = 31 * result + (this.sources.hashCode());
            result = 31 * result + (this.logMonitoring != null ? this.logMonitoring.hashCode() : 0);
            result = 31 * result + (this.retainOnCreate != null ? this.retainOnCreate.hashCode() : 0);
            result = 31 * result + (this.roleArn != null ? this.roleArn.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            return result;
        }
    }
}
