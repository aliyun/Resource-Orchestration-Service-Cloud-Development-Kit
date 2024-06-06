package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>RosClusterApplication</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.533Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterApplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterApplicationProps.Jsii$Proxy.class)
public interface RosClusterApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getYamlContent();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultNamespace() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRolePolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValidationMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWaitUntil() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterApplicationProps> {
        java.lang.Object clusterId;
        java.lang.Object yamlContent;
        java.lang.Object defaultNamespace;
        java.lang.Object rolePolicy;
        java.lang.Object stage;
        java.lang.Object validationMode;
        java.lang.Object waitUntil;

        /**
         * Sets the value of {@link RosClusterApplicationProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getYamlContent}
         * @param yamlContent the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder yamlContent(java.lang.String yamlContent) {
            this.yamlContent = yamlContent;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getYamlContent}
         * @param yamlContent the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder yamlContent(com.aliyun.ros.cdk.core.IResolvable yamlContent) {
            this.yamlContent = yamlContent;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getDefaultNamespace}
         * @param defaultNamespace the value to be set.
         * @return {@code this}
         */
        public Builder defaultNamespace(java.lang.String defaultNamespace) {
            this.defaultNamespace = defaultNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getDefaultNamespace}
         * @param defaultNamespace the value to be set.
         * @return {@code this}
         */
        public Builder defaultNamespace(com.aliyun.ros.cdk.core.IResolvable defaultNamespace) {
            this.defaultNamespace = defaultNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getRolePolicy}
         * @param rolePolicy the value to be set.
         * @return {@code this}
         */
        public Builder rolePolicy(java.lang.String rolePolicy) {
            this.rolePolicy = rolePolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getRolePolicy}
         * @param rolePolicy the value to be set.
         * @return {@code this}
         */
        public Builder rolePolicy(com.aliyun.ros.cdk.core.IResolvable rolePolicy) {
            this.rolePolicy = rolePolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getStage}
         * @param stage the value to be set.
         * @return {@code this}
         */
        public Builder stage(java.lang.String stage) {
            this.stage = stage;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getStage}
         * @param stage the value to be set.
         * @return {@code this}
         */
        public Builder stage(com.aliyun.ros.cdk.core.IResolvable stage) {
            this.stage = stage;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getValidationMode}
         * @param validationMode the value to be set.
         * @return {@code this}
         */
        public Builder validationMode(java.lang.String validationMode) {
            this.validationMode = validationMode;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getValidationMode}
         * @param validationMode the value to be set.
         * @return {@code this}
         */
        public Builder validationMode(com.aliyun.ros.cdk.core.IResolvable validationMode) {
            this.validationMode = validationMode;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getWaitUntil}
         * @param waitUntil the value to be set.
         * @return {@code this}
         */
        public Builder waitUntil(com.aliyun.ros.cdk.core.IResolvable waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterApplicationProps#getWaitUntil}
         * @param waitUntil the value to be set.
         * @return {@code this}
         */
        public Builder waitUntil(java.util.List<? extends java.lang.Object> waitUntil) {
            this.waitUntil = waitUntil;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterApplicationProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object yamlContent;
        private final java.lang.Object defaultNamespace;
        private final java.lang.Object rolePolicy;
        private final java.lang.Object stage;
        private final java.lang.Object validationMode;
        private final java.lang.Object waitUntil;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.yamlContent = software.amazon.jsii.Kernel.get(this, "yamlContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultNamespace = software.amazon.jsii.Kernel.get(this, "defaultNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rolePolicy = software.amazon.jsii.Kernel.get(this, "rolePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stage = software.amazon.jsii.Kernel.get(this, "stage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validationMode = software.amazon.jsii.Kernel.get(this, "validationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitUntil = software.amazon.jsii.Kernel.get(this, "waitUntil", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.yamlContent = java.util.Objects.requireNonNull(builder.yamlContent, "yamlContent is required");
            this.defaultNamespace = builder.defaultNamespace;
            this.rolePolicy = builder.rolePolicy;
            this.stage = builder.stage;
            this.validationMode = builder.validationMode;
            this.waitUntil = builder.waitUntil;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getYamlContent() {
            return this.yamlContent;
        }

        @Override
        public final java.lang.Object getDefaultNamespace() {
            return this.defaultNamespace;
        }

        @Override
        public final java.lang.Object getRolePolicy() {
            return this.rolePolicy;
        }

        @Override
        public final java.lang.Object getStage() {
            return this.stage;
        }

        @Override
        public final java.lang.Object getValidationMode() {
            return this.validationMode;
        }

        @Override
        public final java.lang.Object getWaitUntil() {
            return this.waitUntil;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("yamlContent", om.valueToTree(this.getYamlContent()));
            if (this.getDefaultNamespace() != null) {
                data.set("defaultNamespace", om.valueToTree(this.getDefaultNamespace()));
            }
            if (this.getRolePolicy() != null) {
                data.set("rolePolicy", om.valueToTree(this.getRolePolicy()));
            }
            if (this.getStage() != null) {
                data.set("stage", om.valueToTree(this.getStage()));
            }
            if (this.getValidationMode() != null) {
                data.set("validationMode", om.valueToTree(this.getValidationMode()));
            }
            if (this.getWaitUntil() != null) {
                data.set("waitUntil", om.valueToTree(this.getWaitUntil()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterApplicationProps.Jsii$Proxy that = (RosClusterApplicationProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!yamlContent.equals(that.yamlContent)) return false;
            if (this.defaultNamespace != null ? !this.defaultNamespace.equals(that.defaultNamespace) : that.defaultNamespace != null) return false;
            if (this.rolePolicy != null ? !this.rolePolicy.equals(that.rolePolicy) : that.rolePolicy != null) return false;
            if (this.stage != null ? !this.stage.equals(that.stage) : that.stage != null) return false;
            if (this.validationMode != null ? !this.validationMode.equals(that.validationMode) : that.validationMode != null) return false;
            return this.waitUntil != null ? this.waitUntil.equals(that.waitUntil) : that.waitUntil == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.yamlContent.hashCode());
            result = 31 * result + (this.defaultNamespace != null ? this.defaultNamespace.hashCode() : 0);
            result = 31 * result + (this.rolePolicy != null ? this.rolePolicy.hashCode() : 0);
            result = 31 * result + (this.stage != null ? this.stage.hashCode() : 0);
            result = 31 * result + (this.validationMode != null ? this.validationMode.hashCode() : 0);
            result = 31 * result + (this.waitUntil != null ? this.waitUntil.hashCode() : 0);
            return result;
        }
    }
}
