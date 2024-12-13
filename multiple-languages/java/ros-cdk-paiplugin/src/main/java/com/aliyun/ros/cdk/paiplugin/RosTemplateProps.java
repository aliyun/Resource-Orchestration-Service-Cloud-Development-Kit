package com.aliyun.ros.cdk.paiplugin;

/**
 * Properties for defining a <code>RosTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:10.513Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paiplugin.$Module.class, fqn = "@alicloud/ros-cdk-paiplugin.RosTemplateProps")
@software.amazon.jsii.Jsii.Proxy(RosTemplateProps.Jsii$Proxy.class)
public interface RosTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContent();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSignature() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSignatureId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTemplateProps> {
        java.lang.Object content;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object type;
        java.lang.Object signature;
        java.lang.Object signatureId;

        /**
         * Sets the value of {@link RosTemplateProps#getContent}
         * @param content the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getContent}
         * @param content the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.Number type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getSignature}
         * @param signature the value to be set.
         * @return {@code this}
         */
        public Builder signature(java.lang.String signature) {
            this.signature = signature;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getSignature}
         * @param signature the value to be set.
         * @return {@code this}
         */
        public Builder signature(com.aliyun.ros.cdk.core.IResolvable signature) {
            this.signature = signature;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getSignatureId}
         * @param signatureId the value to be set.
         * @return {@code this}
         */
        public Builder signatureId(java.lang.String signatureId) {
            this.signatureId = signatureId;
            return this;
        }

        /**
         * Sets the value of {@link RosTemplateProps#getSignatureId}
         * @param signatureId the value to be set.
         * @return {@code this}
         */
        public Builder signatureId(com.aliyun.ros.cdk.core.IResolvable signatureId) {
            this.signatureId = signatureId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTemplateProps {
        private final java.lang.Object content;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object type;
        private final java.lang.Object signature;
        private final java.lang.Object signatureId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.signature = software.amazon.jsii.Kernel.get(this, "signature", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.signatureId = software.amazon.jsii.Kernel.get(this, "signatureId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.content = java.util.Objects.requireNonNull(builder.content, "content is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.signature = builder.signature;
            this.signatureId = builder.signatureId;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getSignature() {
            return this.signature;
        }

        @Override
        public final java.lang.Object getSignatureId() {
            return this.signatureId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("content", om.valueToTree(this.getContent()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getSignature() != null) {
                data.set("signature", om.valueToTree(this.getSignature()));
            }
            if (this.getSignatureId() != null) {
                data.set("signatureId", om.valueToTree(this.getSignatureId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paiplugin.RosTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTemplateProps.Jsii$Proxy that = (RosTemplateProps.Jsii$Proxy) o;

            if (!content.equals(that.content)) return false;
            if (!description.equals(that.description)) return false;
            if (!name.equals(that.name)) return false;
            if (!type.equals(that.type)) return false;
            if (this.signature != null ? !this.signature.equals(that.signature) : that.signature != null) return false;
            return this.signatureId != null ? this.signatureId.equals(that.signatureId) : that.signatureId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.content.hashCode();
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.signature != null ? this.signature.hashCode() : 0);
            result = 31 * result + (this.signatureId != null ? this.signatureId.hashCode() : 0);
            return result;
        }
    }
}
