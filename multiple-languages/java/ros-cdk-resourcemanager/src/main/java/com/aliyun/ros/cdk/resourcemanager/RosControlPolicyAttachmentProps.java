package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.438Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosControlPolicyAttachmentProps.Jsii$Proxy.class)
public interface RosControlPolicyAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetId();

    /**
     * @return a {@link Builder} of {@link RosControlPolicyAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosControlPolicyAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosControlPolicyAttachmentProps> {
        java.lang.Object policyId;
        java.lang.Object targetId;

        /**
         * Sets the value of {@link RosControlPolicyAttachmentProps#getPolicyId}
         * @param policyId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyId(java.lang.String policyId) {
            this.policyId = policyId;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyAttachmentProps#getPolicyId}
         * @param policyId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyId(com.aliyun.ros.cdk.core.IResolvable policyId) {
            this.policyId = policyId;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyAttachmentProps#getTargetId}
         * @param targetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(java.lang.String targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyAttachmentProps#getTargetId}
         * @param targetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetId(com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosControlPolicyAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosControlPolicyAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosControlPolicyAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosControlPolicyAttachmentProps {
        private final java.lang.Object policyId;
        private final java.lang.Object targetId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyId = software.amazon.jsii.Kernel.get(this, "policyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetId = software.amazon.jsii.Kernel.get(this, "targetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyId = java.util.Objects.requireNonNull(builder.policyId, "policyId is required");
            this.targetId = java.util.Objects.requireNonNull(builder.targetId, "targetId is required");
        }

        @Override
        public final java.lang.Object getPolicyId() {
            return this.policyId;
        }

        @Override
        public final java.lang.Object getTargetId() {
            return this.targetId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyId", om.valueToTree(this.getPolicyId()));
            data.set("targetId", om.valueToTree(this.getTargetId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosControlPolicyAttachmentProps.Jsii$Proxy that = (RosControlPolicyAttachmentProps.Jsii$Proxy) o;

            if (!policyId.equals(that.policyId)) return false;
            return this.targetId.equals(that.targetId);
        }

        @Override
        public final int hashCode() {
            int result = this.policyId.hashCode();
            result = 31 * result + (this.targetId.hashCode());
            return result;
        }
    }
}
