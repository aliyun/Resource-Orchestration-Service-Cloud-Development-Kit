package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>DomainAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:27:10.854Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.DomainAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(DomainAttachmentProps.Jsii$Proxy.class)
public interface DomainAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domainNames: The list of domain names to attach.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainNames();

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * @return a {@link Builder} of {@link DomainAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainAttachmentProps> {
        java.lang.Object domainNames;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link DomainAttachmentProps#getDomainNames}
         * @param domainNames Property domainNames: The list of domain names to attach. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNames(com.aliyun.ros.cdk.core.IResolvable domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Sets the value of {@link DomainAttachmentProps#getDomainNames}
         * @param domainNames Property domainNames: The list of domain names to attach. This parameter is required.
         * @return {@code this}
         */
        public Builder domainNames(java.util.List<? extends java.lang.Object> domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Sets the value of {@link DomainAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DomainAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainAttachmentProps {
        private final java.lang.Object domainNames;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainNames = software.amazon.jsii.Kernel.get(this, "domainNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainNames = java.util.Objects.requireNonNull(builder.domainNames, "domainNames is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
        }

        @Override
        public final java.lang.Object getDomainNames() {
            return this.domainNames;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainNames", om.valueToTree(this.getDomainNames()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.DomainAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainAttachmentProps.Jsii$Proxy that = (DomainAttachmentProps.Jsii$Proxy) o;

            if (!domainNames.equals(that.domainNames)) return false;
            return this.instanceId.equals(that.instanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.domainNames.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            return result;
        }
    }
}
