package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>RosModelVersion</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.426Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosModelVersionProps")
@software.amazon.jsii.Jsii.Proxy(RosModelVersionProps.Jsii$Proxy.class)
public interface RosModelVersionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getModelId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUri();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApprovalStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtraInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFormatType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrameworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInferenceSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetrics() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrainingSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosModelVersionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosModelVersionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosModelVersionProps> {
        java.lang.Object modelId;
        java.lang.Object uri;
        java.lang.Object approvalStatus;
        java.lang.Object extraInfo;
        java.lang.Object formatType;
        java.lang.Object frameworkType;
        java.lang.Object inferenceSpec;
        java.lang.Object labels;
        java.lang.Object metrics;
        java.lang.Object options;
        java.lang.Object sourceId;
        java.lang.Object sourceType;
        java.lang.Object trainingSpec;
        java.lang.Object versionDescription;
        java.lang.Object versionName;

        /**
         * Sets the value of {@link RosModelVersionProps#getModelId}
         * @param modelId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder modelId(java.lang.String modelId) {
            this.modelId = modelId;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getModelId}
         * @param modelId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder modelId(com.aliyun.ros.cdk.core.IResolvable modelId) {
            this.modelId = modelId;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getUri}
         * @param uri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getUri}
         * @param uri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getApprovalStatus}
         * @param approvalStatus the value to be set.
         * @return {@code this}
         */
        public Builder approvalStatus(java.lang.String approvalStatus) {
            this.approvalStatus = approvalStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getApprovalStatus}
         * @param approvalStatus the value to be set.
         * @return {@code this}
         */
        public Builder approvalStatus(com.aliyun.ros.cdk.core.IResolvable approvalStatus) {
            this.approvalStatus = approvalStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getExtraInfo}
         * @param extraInfo the value to be set.
         * @return {@code this}
         */
        public Builder extraInfo(com.aliyun.ros.cdk.core.IResolvable extraInfo) {
            this.extraInfo = extraInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getExtraInfo}
         * @param extraInfo the value to be set.
         * @return {@code this}
         */
        public Builder extraInfo(java.util.Map<java.lang.String, ? extends java.lang.Object> extraInfo) {
            this.extraInfo = extraInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getFormatType}
         * @param formatType the value to be set.
         * @return {@code this}
         */
        public Builder formatType(java.lang.String formatType) {
            this.formatType = formatType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getFormatType}
         * @param formatType the value to be set.
         * @return {@code this}
         */
        public Builder formatType(com.aliyun.ros.cdk.core.IResolvable formatType) {
            this.formatType = formatType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getFrameworkType}
         * @param frameworkType the value to be set.
         * @return {@code this}
         */
        public Builder frameworkType(java.lang.String frameworkType) {
            this.frameworkType = frameworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getFrameworkType}
         * @param frameworkType the value to be set.
         * @return {@code this}
         */
        public Builder frameworkType(com.aliyun.ros.cdk.core.IResolvable frameworkType) {
            this.frameworkType = frameworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getInferenceSpec}
         * @param inferenceSpec the value to be set.
         * @return {@code this}
         */
        public Builder inferenceSpec(com.aliyun.ros.cdk.core.IResolvable inferenceSpec) {
            this.inferenceSpec = inferenceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getInferenceSpec}
         * @param inferenceSpec the value to be set.
         * @return {@code this}
         */
        public Builder inferenceSpec(java.util.Map<java.lang.String, ? extends java.lang.Object> inferenceSpec) {
            this.inferenceSpec = inferenceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getLabels}
         * @param labels the value to be set.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getLabels}
         * @param labels the value to be set.
         * @return {@code this}
         */
        public Builder labels(java.util.List<? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getMetrics}
         * @param metrics the value to be set.
         * @return {@code this}
         */
        public Builder metrics(com.aliyun.ros.cdk.core.IResolvable metrics) {
            this.metrics = metrics;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getMetrics}
         * @param metrics the value to be set.
         * @return {@code this}
         */
        public Builder metrics(java.util.Map<java.lang.String, ? extends java.lang.Object> metrics) {
            this.metrics = metrics;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(java.lang.String options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getSourceId}
         * @param sourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceId(java.lang.String sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getSourceId}
         * @param sourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceId(com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getTrainingSpec}
         * @param trainingSpec the value to be set.
         * @return {@code this}
         */
        public Builder trainingSpec(com.aliyun.ros.cdk.core.IResolvable trainingSpec) {
            this.trainingSpec = trainingSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getTrainingSpec}
         * @param trainingSpec the value to be set.
         * @return {@code this}
         */
        public Builder trainingSpec(java.util.Map<java.lang.String, ? extends java.lang.Object> trainingSpec) {
            this.trainingSpec = trainingSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getVersionDescription}
         * @param versionDescription the value to be set.
         * @return {@code this}
         */
        public Builder versionDescription(java.lang.String versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getVersionDescription}
         * @param versionDescription the value to be set.
         * @return {@code this}
         */
        public Builder versionDescription(com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getVersionName}
         * @param versionName the value to be set.
         * @return {@code this}
         */
        public Builder versionName(java.lang.String versionName) {
            this.versionName = versionName;
            return this;
        }

        /**
         * Sets the value of {@link RosModelVersionProps#getVersionName}
         * @param versionName the value to be set.
         * @return {@code this}
         */
        public Builder versionName(com.aliyun.ros.cdk.core.IResolvable versionName) {
            this.versionName = versionName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosModelVersionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosModelVersionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosModelVersionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosModelVersionProps {
        private final java.lang.Object modelId;
        private final java.lang.Object uri;
        private final java.lang.Object approvalStatus;
        private final java.lang.Object extraInfo;
        private final java.lang.Object formatType;
        private final java.lang.Object frameworkType;
        private final java.lang.Object inferenceSpec;
        private final java.lang.Object labels;
        private final java.lang.Object metrics;
        private final java.lang.Object options;
        private final java.lang.Object sourceId;
        private final java.lang.Object sourceType;
        private final java.lang.Object trainingSpec;
        private final java.lang.Object versionDescription;
        private final java.lang.Object versionName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.modelId = software.amazon.jsii.Kernel.get(this, "modelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.approvalStatus = software.amazon.jsii.Kernel.get(this, "approvalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extraInfo = software.amazon.jsii.Kernel.get(this, "extraInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.formatType = software.amazon.jsii.Kernel.get(this, "formatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frameworkType = software.amazon.jsii.Kernel.get(this, "frameworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inferenceSpec = software.amazon.jsii.Kernel.get(this, "inferenceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metrics = software.amazon.jsii.Kernel.get(this, "metrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceId = software.amazon.jsii.Kernel.get(this, "sourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trainingSpec = software.amazon.jsii.Kernel.get(this, "trainingSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionDescription = software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionName = software.amazon.jsii.Kernel.get(this, "versionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.modelId = java.util.Objects.requireNonNull(builder.modelId, "modelId is required");
            this.uri = java.util.Objects.requireNonNull(builder.uri, "uri is required");
            this.approvalStatus = builder.approvalStatus;
            this.extraInfo = builder.extraInfo;
            this.formatType = builder.formatType;
            this.frameworkType = builder.frameworkType;
            this.inferenceSpec = builder.inferenceSpec;
            this.labels = builder.labels;
            this.metrics = builder.metrics;
            this.options = builder.options;
            this.sourceId = builder.sourceId;
            this.sourceType = builder.sourceType;
            this.trainingSpec = builder.trainingSpec;
            this.versionDescription = builder.versionDescription;
            this.versionName = builder.versionName;
        }

        @Override
        public final java.lang.Object getModelId() {
            return this.modelId;
        }

        @Override
        public final java.lang.Object getUri() {
            return this.uri;
        }

        @Override
        public final java.lang.Object getApprovalStatus() {
            return this.approvalStatus;
        }

        @Override
        public final java.lang.Object getExtraInfo() {
            return this.extraInfo;
        }

        @Override
        public final java.lang.Object getFormatType() {
            return this.formatType;
        }

        @Override
        public final java.lang.Object getFrameworkType() {
            return this.frameworkType;
        }

        @Override
        public final java.lang.Object getInferenceSpec() {
            return this.inferenceSpec;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        public final java.lang.Object getMetrics() {
            return this.metrics;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.Object getSourceId() {
            return this.sourceId;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getTrainingSpec() {
            return this.trainingSpec;
        }

        @Override
        public final java.lang.Object getVersionDescription() {
            return this.versionDescription;
        }

        @Override
        public final java.lang.Object getVersionName() {
            return this.versionName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("modelId", om.valueToTree(this.getModelId()));
            data.set("uri", om.valueToTree(this.getUri()));
            if (this.getApprovalStatus() != null) {
                data.set("approvalStatus", om.valueToTree(this.getApprovalStatus()));
            }
            if (this.getExtraInfo() != null) {
                data.set("extraInfo", om.valueToTree(this.getExtraInfo()));
            }
            if (this.getFormatType() != null) {
                data.set("formatType", om.valueToTree(this.getFormatType()));
            }
            if (this.getFrameworkType() != null) {
                data.set("frameworkType", om.valueToTree(this.getFrameworkType()));
            }
            if (this.getInferenceSpec() != null) {
                data.set("inferenceSpec", om.valueToTree(this.getInferenceSpec()));
            }
            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }
            if (this.getMetrics() != null) {
                data.set("metrics", om.valueToTree(this.getMetrics()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getSourceId() != null) {
                data.set("sourceId", om.valueToTree(this.getSourceId()));
            }
            if (this.getSourceType() != null) {
                data.set("sourceType", om.valueToTree(this.getSourceType()));
            }
            if (this.getTrainingSpec() != null) {
                data.set("trainingSpec", om.valueToTree(this.getTrainingSpec()));
            }
            if (this.getVersionDescription() != null) {
                data.set("versionDescription", om.valueToTree(this.getVersionDescription()));
            }
            if (this.getVersionName() != null) {
                data.set("versionName", om.valueToTree(this.getVersionName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RosModelVersionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosModelVersionProps.Jsii$Proxy that = (RosModelVersionProps.Jsii$Proxy) o;

            if (!modelId.equals(that.modelId)) return false;
            if (!uri.equals(that.uri)) return false;
            if (this.approvalStatus != null ? !this.approvalStatus.equals(that.approvalStatus) : that.approvalStatus != null) return false;
            if (this.extraInfo != null ? !this.extraInfo.equals(that.extraInfo) : that.extraInfo != null) return false;
            if (this.formatType != null ? !this.formatType.equals(that.formatType) : that.formatType != null) return false;
            if (this.frameworkType != null ? !this.frameworkType.equals(that.frameworkType) : that.frameworkType != null) return false;
            if (this.inferenceSpec != null ? !this.inferenceSpec.equals(that.inferenceSpec) : that.inferenceSpec != null) return false;
            if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
            if (this.metrics != null ? !this.metrics.equals(that.metrics) : that.metrics != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.sourceId != null ? !this.sourceId.equals(that.sourceId) : that.sourceId != null) return false;
            if (this.sourceType != null ? !this.sourceType.equals(that.sourceType) : that.sourceType != null) return false;
            if (this.trainingSpec != null ? !this.trainingSpec.equals(that.trainingSpec) : that.trainingSpec != null) return false;
            if (this.versionDescription != null ? !this.versionDescription.equals(that.versionDescription) : that.versionDescription != null) return false;
            return this.versionName != null ? this.versionName.equals(that.versionName) : that.versionName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.modelId.hashCode();
            result = 31 * result + (this.uri.hashCode());
            result = 31 * result + (this.approvalStatus != null ? this.approvalStatus.hashCode() : 0);
            result = 31 * result + (this.extraInfo != null ? this.extraInfo.hashCode() : 0);
            result = 31 * result + (this.formatType != null ? this.formatType.hashCode() : 0);
            result = 31 * result + (this.frameworkType != null ? this.frameworkType.hashCode() : 0);
            result = 31 * result + (this.inferenceSpec != null ? this.inferenceSpec.hashCode() : 0);
            result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
            result = 31 * result + (this.metrics != null ? this.metrics.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.sourceId != null ? this.sourceId.hashCode() : 0);
            result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
            result = 31 * result + (this.trainingSpec != null ? this.trainingSpec.hashCode() : 0);
            result = 31 * result + (this.versionDescription != null ? this.versionDescription.hashCode() : 0);
            result = 31 * result + (this.versionName != null ? this.versionName.hashCode() : 0);
            return result;
        }
    }
}
