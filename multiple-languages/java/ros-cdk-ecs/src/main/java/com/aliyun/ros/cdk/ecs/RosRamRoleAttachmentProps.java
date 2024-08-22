package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosRamRoleAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:20.276Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosRamRoleAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosRamRoleAttachmentProps.Jsii$Proxy.class)
public interface RosRamRoleAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRamRoleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRamRoleAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRamRoleAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRamRoleAttachmentProps> {
        java.lang.Object instanceIds;
        java.lang.Object ramRoleName;
        java.lang.Object policy;

        /**
         * Sets the value of {@link RosRamRoleAttachmentProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosRamRoleAttachmentProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosRamRoleAttachmentProps#getRamRoleName}
         * @param ramRoleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRamRoleAttachmentProps#getRamRoleName}
         * @param ramRoleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRamRoleAttachmentProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(java.lang.String policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosRamRoleAttachmentProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRamRoleAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRamRoleAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRamRoleAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRamRoleAttachmentProps {
        private final java.lang.Object instanceIds;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object policy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.ramRoleName = java.util.Objects.requireNonNull(builder.ramRoleName, "ramRoleName is required");
            this.policy = builder.policy;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.Object getPolicy() {
            return this.policy;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosRamRoleAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRamRoleAttachmentProps.Jsii$Proxy that = (RosRamRoleAttachmentProps.Jsii$Proxy) o;

            if (!instanceIds.equals(that.instanceIds)) return false;
            if (!ramRoleName.equals(that.ramRoleName)) return false;
            return this.policy != null ? this.policy.equals(that.policy) : that.policy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            result = 31 * result + (this.ramRoleName.hashCode());
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            return result;
        }
    }
}
