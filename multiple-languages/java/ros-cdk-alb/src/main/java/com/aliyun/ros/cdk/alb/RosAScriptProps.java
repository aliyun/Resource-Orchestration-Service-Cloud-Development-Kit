package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>RosAScript</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.301Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosAScriptProps")
@software.amazon.jsii.Jsii.Proxy(RosAScriptProps.Jsii$Proxy.class)
public interface RosAScriptProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAScriptName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScriptContent();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtAttributeEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtAttributes() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAScriptProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAScriptProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAScriptProps> {
        java.lang.Object aScriptName;
        java.lang.Object listenerId;
        java.lang.Object scriptContent;
        java.lang.Object enabled;
        java.lang.Object extAttributeEnabled;
        java.lang.Object extAttributes;

        /**
         * Sets the value of {@link RosAScriptProps#getAScriptName}
         * @param aScriptName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aScriptName(java.lang.String aScriptName) {
            this.aScriptName = aScriptName;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getAScriptName}
         * @param aScriptName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aScriptName(com.aliyun.ros.cdk.core.IResolvable aScriptName) {
            this.aScriptName = aScriptName;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getScriptContent}
         * @param scriptContent the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scriptContent(java.lang.String scriptContent) {
            this.scriptContent = scriptContent;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getScriptContent}
         * @param scriptContent the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scriptContent(com.aliyun.ros.cdk.core.IResolvable scriptContent) {
            this.scriptContent = scriptContent;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(java.lang.Boolean enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getEnabled}
         * @param enabled the value to be set.
         * @return {@code this}
         */
        public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.enabled = enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getExtAttributeEnabled}
         * @param extAttributeEnabled the value to be set.
         * @return {@code this}
         */
        public Builder extAttributeEnabled(java.lang.Boolean extAttributeEnabled) {
            this.extAttributeEnabled = extAttributeEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getExtAttributeEnabled}
         * @param extAttributeEnabled the value to be set.
         * @return {@code this}
         */
        public Builder extAttributeEnabled(com.aliyun.ros.cdk.core.IResolvable extAttributeEnabled) {
            this.extAttributeEnabled = extAttributeEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getExtAttributes}
         * @param extAttributes the value to be set.
         * @return {@code this}
         */
        public Builder extAttributes(com.aliyun.ros.cdk.core.IResolvable extAttributes) {
            this.extAttributes = extAttributes;
            return this;
        }

        /**
         * Sets the value of {@link RosAScriptProps#getExtAttributes}
         * @param extAttributes the value to be set.
         * @return {@code this}
         */
        public Builder extAttributes(java.util.List<? extends java.lang.Object> extAttributes) {
            this.extAttributes = extAttributes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAScriptProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAScriptProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAScriptProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAScriptProps {
        private final java.lang.Object aScriptName;
        private final java.lang.Object listenerId;
        private final java.lang.Object scriptContent;
        private final java.lang.Object enabled;
        private final java.lang.Object extAttributeEnabled;
        private final java.lang.Object extAttributes;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aScriptName = software.amazon.jsii.Kernel.get(this, "aScriptName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scriptContent = software.amazon.jsii.Kernel.get(this, "scriptContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extAttributeEnabled = software.amazon.jsii.Kernel.get(this, "extAttributeEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extAttributes = software.amazon.jsii.Kernel.get(this, "extAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aScriptName = java.util.Objects.requireNonNull(builder.aScriptName, "aScriptName is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
            this.scriptContent = java.util.Objects.requireNonNull(builder.scriptContent, "scriptContent is required");
            this.enabled = builder.enabled;
            this.extAttributeEnabled = builder.extAttributeEnabled;
            this.extAttributes = builder.extAttributes;
        }

        @Override
        public final java.lang.Object getAScriptName() {
            return this.aScriptName;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        public final java.lang.Object getScriptContent() {
            return this.scriptContent;
        }

        @Override
        public final java.lang.Object getEnabled() {
            return this.enabled;
        }

        @Override
        public final java.lang.Object getExtAttributeEnabled() {
            return this.extAttributeEnabled;
        }

        @Override
        public final java.lang.Object getExtAttributes() {
            return this.extAttributes;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aScriptName", om.valueToTree(this.getAScriptName()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));
            data.set("scriptContent", om.valueToTree(this.getScriptContent()));
            if (this.getEnabled() != null) {
                data.set("enabled", om.valueToTree(this.getEnabled()));
            }
            if (this.getExtAttributeEnabled() != null) {
                data.set("extAttributeEnabled", om.valueToTree(this.getExtAttributeEnabled()));
            }
            if (this.getExtAttributes() != null) {
                data.set("extAttributes", om.valueToTree(this.getExtAttributes()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosAScriptProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAScriptProps.Jsii$Proxy that = (RosAScriptProps.Jsii$Proxy) o;

            if (!aScriptName.equals(that.aScriptName)) return false;
            if (!listenerId.equals(that.listenerId)) return false;
            if (!scriptContent.equals(that.scriptContent)) return false;
            if (this.enabled != null ? !this.enabled.equals(that.enabled) : that.enabled != null) return false;
            if (this.extAttributeEnabled != null ? !this.extAttributeEnabled.equals(that.extAttributeEnabled) : that.extAttributeEnabled != null) return false;
            return this.extAttributes != null ? this.extAttributes.equals(that.extAttributes) : that.extAttributes == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aScriptName.hashCode();
            result = 31 * result + (this.listenerId.hashCode());
            result = 31 * result + (this.scriptContent.hashCode());
            result = 31 * result + (this.enabled != null ? this.enabled.hashCode() : 0);
            result = 31 * result + (this.extAttributeEnabled != null ? this.extAttributeEnabled.hashCode() : 0);
            result = 31 * result + (this.extAttributes != null ? this.extAttributes.hashCode() : 0);
            return result;
        }
    }
}
