package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>EnvServiceMonitor</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.911Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.EnvServiceMonitorProps")
@software.amazon.jsii.Jsii.Proxy(EnvServiceMonitorProps.Jsii$Proxy.class)
public interface EnvServiceMonitorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configYaml: The YAML configuration string of the ServiceMonitor.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigYaml();

    /**
     * Property environmentId: The ID of the environment instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentId();

    /**
     * Property aliyunLang: The language.
     * <p>
     * Valid values: zh and en. Default value: zh.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAliyunLang() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EnvServiceMonitorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EnvServiceMonitorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EnvServiceMonitorProps> {
        java.lang.Object configYaml;
        java.lang.Object environmentId;
        java.lang.Object aliyunLang;

        /**
         * Sets the value of {@link EnvServiceMonitorProps#getConfigYaml}
         * @param configYaml Property configYaml: The YAML configuration string of the ServiceMonitor. This parameter is required.
         * @return {@code this}
         */
        public Builder configYaml(java.lang.String configYaml) {
            this.configYaml = configYaml;
            return this;
        }

        /**
         * Sets the value of {@link EnvServiceMonitorProps#getConfigYaml}
         * @param configYaml Property configYaml: The YAML configuration string of the ServiceMonitor. This parameter is required.
         * @return {@code this}
         */
        public Builder configYaml(com.aliyun.ros.cdk.core.IResolvable configYaml) {
            this.configYaml = configYaml;
            return this;
        }

        /**
         * Sets the value of {@link EnvServiceMonitorProps#getEnvironmentId}
         * @param environmentId Property environmentId: The ID of the environment instance. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(java.lang.String environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link EnvServiceMonitorProps#getEnvironmentId}
         * @param environmentId Property environmentId: The ID of the environment instance. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link EnvServiceMonitorProps#getAliyunLang}
         * @param aliyunLang Property aliyunLang: The language.
         *                   Valid values: zh and en. Default value: zh.
         * @return {@code this}
         */
        public Builder aliyunLang(java.lang.String aliyunLang) {
            this.aliyunLang = aliyunLang;
            return this;
        }

        /**
         * Sets the value of {@link EnvServiceMonitorProps#getAliyunLang}
         * @param aliyunLang Property aliyunLang: The language.
         *                   Valid values: zh and en. Default value: zh.
         * @return {@code this}
         */
        public Builder aliyunLang(com.aliyun.ros.cdk.core.IResolvable aliyunLang) {
            this.aliyunLang = aliyunLang;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EnvServiceMonitorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EnvServiceMonitorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EnvServiceMonitorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvServiceMonitorProps {
        private final java.lang.Object configYaml;
        private final java.lang.Object environmentId;
        private final java.lang.Object aliyunLang;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configYaml = software.amazon.jsii.Kernel.get(this, "configYaml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aliyunLang = software.amazon.jsii.Kernel.get(this, "aliyunLang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configYaml = java.util.Objects.requireNonNull(builder.configYaml, "configYaml is required");
            this.environmentId = java.util.Objects.requireNonNull(builder.environmentId, "environmentId is required");
            this.aliyunLang = builder.aliyunLang;
        }

        @Override
        public final java.lang.Object getConfigYaml() {
            return this.configYaml;
        }

        @Override
        public final java.lang.Object getEnvironmentId() {
            return this.environmentId;
        }

        @Override
        public final java.lang.Object getAliyunLang() {
            return this.aliyunLang;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("configYaml", om.valueToTree(this.getConfigYaml()));
            data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
            if (this.getAliyunLang() != null) {
                data.set("aliyunLang", om.valueToTree(this.getAliyunLang()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.EnvServiceMonitorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EnvServiceMonitorProps.Jsii$Proxy that = (EnvServiceMonitorProps.Jsii$Proxy) o;

            if (!configYaml.equals(that.configYaml)) return false;
            if (!environmentId.equals(that.environmentId)) return false;
            return this.aliyunLang != null ? this.aliyunLang.equals(that.aliyunLang) : that.aliyunLang == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configYaml.hashCode();
            result = 31 * result + (this.environmentId.hashCode());
            result = 31 * result + (this.aliyunLang != null ? this.aliyunLang.hashCode() : 0);
            return result;
        }
    }
}
