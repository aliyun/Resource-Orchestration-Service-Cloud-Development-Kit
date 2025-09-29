package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>EnvironmentFeature</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.375Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.EnvironmentFeatureProps")
@software.amazon.jsii.Jsii.Proxy(EnvironmentFeatureProps.Jsii$Proxy.class)
public interface EnvironmentFeatureProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property environmentId: The id of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentId();

    /**
     * Property featureName: The name of the feature.
     * <p>
     * Valid values:
     * app-agent-pilot
     * metric-agent
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFeatureName();

    /**
     * Property featureVersion: The version of the feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFeatureVersion();

    /**
     * Property config: The metadata of the feature.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EnvironmentFeatureProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EnvironmentFeatureProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EnvironmentFeatureProps> {
        java.lang.Object environmentId;
        java.lang.Object featureName;
        java.lang.Object featureVersion;
        java.lang.Object config;

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getEnvironmentId}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(java.lang.String environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getEnvironmentId}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getFeatureName}
         * @param featureName Property featureName: The name of the feature. This parameter is required.
         *                    Valid values:
         *                    app-agent-pilot
         *                    metric-agent
         * @return {@code this}
         */
        public Builder featureName(java.lang.String featureName) {
            this.featureName = featureName;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getFeatureName}
         * @param featureName Property featureName: The name of the feature. This parameter is required.
         *                    Valid values:
         *                    app-agent-pilot
         *                    metric-agent
         * @return {@code this}
         */
        public Builder featureName(com.aliyun.ros.cdk.core.IResolvable featureName) {
            this.featureName = featureName;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getFeatureVersion}
         * @param featureVersion Property featureVersion: The version of the feature. This parameter is required.
         * @return {@code this}
         */
        public Builder featureVersion(java.lang.String featureVersion) {
            this.featureVersion = featureVersion;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getFeatureVersion}
         * @param featureVersion Property featureVersion: The version of the feature. This parameter is required.
         * @return {@code this}
         */
        public Builder featureVersion(com.aliyun.ros.cdk.core.IResolvable featureVersion) {
            this.featureVersion = featureVersion;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getConfig}
         * @param config Property config: The metadata of the feature.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentFeatureProps#getConfig}
         * @param config Property config: The metadata of the feature.
         * @return {@code this}
         */
        public Builder config(java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EnvironmentFeatureProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EnvironmentFeatureProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EnvironmentFeatureProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvironmentFeatureProps {
        private final java.lang.Object environmentId;
        private final java.lang.Object featureName;
        private final java.lang.Object featureVersion;
        private final java.lang.Object config;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.featureName = software.amazon.jsii.Kernel.get(this, "featureName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.featureVersion = software.amazon.jsii.Kernel.get(this, "featureVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.environmentId = java.util.Objects.requireNonNull(builder.environmentId, "environmentId is required");
            this.featureName = java.util.Objects.requireNonNull(builder.featureName, "featureName is required");
            this.featureVersion = java.util.Objects.requireNonNull(builder.featureVersion, "featureVersion is required");
            this.config = builder.config;
        }

        @Override
        public final java.lang.Object getEnvironmentId() {
            return this.environmentId;
        }

        @Override
        public final java.lang.Object getFeatureName() {
            return this.featureName;
        }

        @Override
        public final java.lang.Object getFeatureVersion() {
            return this.featureVersion;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
            data.set("featureName", om.valueToTree(this.getFeatureName()));
            data.set("featureVersion", om.valueToTree(this.getFeatureVersion()));
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.EnvironmentFeatureProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EnvironmentFeatureProps.Jsii$Proxy that = (EnvironmentFeatureProps.Jsii$Proxy) o;

            if (!environmentId.equals(that.environmentId)) return false;
            if (!featureName.equals(that.featureName)) return false;
            if (!featureVersion.equals(that.featureVersion)) return false;
            return this.config != null ? this.config.equals(that.config) : that.config == null;
        }

        @Override
        public final int hashCode() {
            int result = this.environmentId.hashCode();
            result = 31 * result + (this.featureName.hashCode());
            result = 31 * result + (this.featureVersion.hashCode());
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            return result;
        }
    }
}
