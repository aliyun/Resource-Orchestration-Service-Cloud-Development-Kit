package com.aliyun.ros.cdk.bastionhost;

/**
 * Properties for defining a <code>HostAccountUserGroupAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.020Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.HostAccountUserGroupAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(HostAccountUserGroupAttachmentProps.Jsii$Proxy.class)
public interface HostAccountUserGroupAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHosts();

    /**
     * Property instanceId: The ID of the BastionHost instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property userGroupId: The ID of the user group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserGroupId();

    /**
     * @return a {@link Builder} of {@link HostAccountUserGroupAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HostAccountUserGroupAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HostAccountUserGroupAttachmentProps> {
        java.lang.Object hosts;
        java.lang.Object instanceId;
        java.lang.Object userGroupId;

        /**
         * Sets the value of {@link HostAccountUserGroupAttachmentProps#getHosts}
         * @param hosts Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder hosts(com.aliyun.ros.cdk.core.IResolvable hosts) {
            this.hosts = hosts;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountUserGroupAttachmentProps#getHosts}
         * @param hosts Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder hosts(java.util.List<? extends java.lang.Object> hosts) {
            this.hosts = hosts;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountUserGroupAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the BastionHost instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountUserGroupAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the BastionHost instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountUserGroupAttachmentProps#getUserGroupId}
         * @param userGroupId Property userGroupId: The ID of the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder userGroupId(java.lang.String userGroupId) {
            this.userGroupId = userGroupId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountUserGroupAttachmentProps#getUserGroupId}
         * @param userGroupId Property userGroupId: The ID of the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder userGroupId(com.aliyun.ros.cdk.core.IResolvable userGroupId) {
            this.userGroupId = userGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HostAccountUserGroupAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HostAccountUserGroupAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HostAccountUserGroupAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostAccountUserGroupAttachmentProps {
        private final java.lang.Object hosts;
        private final java.lang.Object instanceId;
        private final java.lang.Object userGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.hosts = software.amazon.jsii.Kernel.get(this, "hosts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userGroupId = software.amazon.jsii.Kernel.get(this, "userGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.hosts = java.util.Objects.requireNonNull(builder.hosts, "hosts is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.userGroupId = java.util.Objects.requireNonNull(builder.userGroupId, "userGroupId is required");
        }

        @Override
        public final java.lang.Object getHosts() {
            return this.hosts;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getUserGroupId() {
            return this.userGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("hosts", om.valueToTree(this.getHosts()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("userGroupId", om.valueToTree(this.getUserGroupId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bastionhost.HostAccountUserGroupAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HostAccountUserGroupAttachmentProps.Jsii$Proxy that = (HostAccountUserGroupAttachmentProps.Jsii$Proxy) o;

            if (!hosts.equals(that.hosts)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            return this.userGroupId.equals(that.userGroupId);
        }

        @Override
        public final int hashCode() {
            int result = this.hosts.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.userGroupId.hashCode());
            return result;
        }
    }
}
