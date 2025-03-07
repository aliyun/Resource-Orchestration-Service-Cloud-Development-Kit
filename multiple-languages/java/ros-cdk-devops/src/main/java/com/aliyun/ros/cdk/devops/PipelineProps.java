package com.aliyun.ros.cdk.devops;

/**
 * Properties for defining a <code>Pipeline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.795Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.PipelineProps")
@software.amazon.jsii.Jsii.Proxy(PipelineProps.Jsii$Proxy.class)
public interface PipelineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property content: Pipeline description in YAML format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContent();

    /**
     * Property name: Pipeline name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId();

    /**
     * @return a {@link Builder} of {@link PipelineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PipelineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PipelineProps> {
        java.lang.Object content;
        java.lang.Object name;
        java.lang.Object organizationId;

        /**
         * Sets the value of {@link PipelineProps#getContent}
         * @param content Property content: Pipeline description in YAML format. This parameter is required.
         * @return {@code this}
         */
        public Builder content(java.lang.String content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getContent}
         * @param content Property content: Pipeline description in YAML format. This parameter is required.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getName}
         * @param name Property name: Pipeline name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getName}
         * @param name Property name: Pipeline name. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(java.lang.String organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getOrganizationId}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         * @return {@code this}
         */
        public Builder organizationId(com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.organizationId = organizationId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PipelineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PipelineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PipelineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PipelineProps {
        private final java.lang.Object content;
        private final java.lang.Object name;
        private final java.lang.Object organizationId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organizationId = software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.content = java.util.Objects.requireNonNull(builder.content, "content is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.organizationId = java.util.Objects.requireNonNull(builder.organizationId, "organizationId is required");
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOrganizationId() {
            return this.organizationId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("content", om.valueToTree(this.getContent()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("organizationId", om.valueToTree(this.getOrganizationId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-devops.PipelineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PipelineProps.Jsii$Proxy that = (PipelineProps.Jsii$Proxy) o;

            if (!content.equals(that.content)) return false;
            if (!name.equals(that.name)) return false;
            return this.organizationId.equals(that.organizationId);
        }

        @Override
        public final int hashCode() {
            int result = this.content.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.organizationId.hashCode());
            return result;
        }
    }
}
