package com.aliyun.ros.cdk.eais;

/**
 * Properties for defining a <code>RosClientInstanceAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.267Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eais.$Module.class, fqn = "@alicloud/ros-cdk-eais.RosClientInstanceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosClientInstanceAttachmentProps.Jsii$Proxy.class)
public interface RosClientInstanceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClientInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * @return a {@link Builder} of {@link RosClientInstanceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClientInstanceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClientInstanceAttachmentProps> {
        java.lang.Object clientInstanceId;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link RosClientInstanceAttachmentProps#getClientInstanceId}
         * @param clientInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clientInstanceId(java.lang.String clientInstanceId) {
            this.clientInstanceId = clientInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosClientInstanceAttachmentProps#getClientInstanceId}
         * @param clientInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clientInstanceId(com.aliyun.ros.cdk.core.IResolvable clientInstanceId) {
            this.clientInstanceId = clientInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosClientInstanceAttachmentProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosClientInstanceAttachmentProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClientInstanceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClientInstanceAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClientInstanceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClientInstanceAttachmentProps {
        private final java.lang.Object clientInstanceId;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clientInstanceId = software.amazon.jsii.Kernel.get(this, "clientInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clientInstanceId = java.util.Objects.requireNonNull(builder.clientInstanceId, "clientInstanceId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
        }

        @Override
        public final java.lang.Object getClientInstanceId() {
            return this.clientInstanceId;
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

            data.set("clientInstanceId", om.valueToTree(this.getClientInstanceId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eais.RosClientInstanceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClientInstanceAttachmentProps.Jsii$Proxy that = (RosClientInstanceAttachmentProps.Jsii$Proxy) o;

            if (!clientInstanceId.equals(that.clientInstanceId)) return false;
            return this.instanceId.equals(that.instanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.clientInstanceId.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            return result;
        }
    }
}
