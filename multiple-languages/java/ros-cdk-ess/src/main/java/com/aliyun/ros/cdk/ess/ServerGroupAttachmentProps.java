package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>ServerGroupAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.084Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ServerGroupAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(ServerGroupAttachmentProps.Jsii$Proxy.class)
public interface ServerGroupAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property serverGroups: A collection of information about server groups.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerGroups();

    /**
     * Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.
     * <p>
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceAttach() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServerGroupAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServerGroupAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServerGroupAttachmentProps> {
        java.lang.Object scalingGroupId;
        java.lang.Object serverGroups;
        java.lang.Object forceAttach;

        /**
         * Sets the value of {@link ServerGroupAttachmentProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupAttachmentProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupAttachmentProps#getServerGroups}
         * @param serverGroups Property serverGroups: A collection of information about server groups. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroups(com.aliyun.ros.cdk.core.IResolvable serverGroups) {
            this.serverGroups = serverGroups;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupAttachmentProps#getServerGroups}
         * @param serverGroups Property serverGroups: A collection of information about server groups. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroups(java.util.List<? extends java.lang.Object> serverGroups) {
            this.serverGroups = serverGroups;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupAttachmentProps#getForceAttach}
         * @param forceAttach Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.
         *                    Valid values:
         *                    true
         *                    false
         *                    Default value: false.
         * @return {@code this}
         */
        public Builder forceAttach(java.lang.Boolean forceAttach) {
            this.forceAttach = forceAttach;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupAttachmentProps#getForceAttach}
         * @param forceAttach Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.
         *                    Valid values:
         *                    true
         *                    false
         *                    Default value: false.
         * @return {@code this}
         */
        public Builder forceAttach(com.aliyun.ros.cdk.core.IResolvable forceAttach) {
            this.forceAttach = forceAttach;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServerGroupAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServerGroupAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServerGroupAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerGroupAttachmentProps {
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object serverGroups;
        private final java.lang.Object forceAttach;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroups = software.amazon.jsii.Kernel.get(this, "serverGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceAttach = software.amazon.jsii.Kernel.get(this, "forceAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.serverGroups = java.util.Objects.requireNonNull(builder.serverGroups, "serverGroups is required");
            this.forceAttach = builder.forceAttach;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getServerGroups() {
            return this.serverGroups;
        }

        @Override
        public final java.lang.Object getForceAttach() {
            return this.forceAttach;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            data.set("serverGroups", om.valueToTree(this.getServerGroups()));
            if (this.getForceAttach() != null) {
                data.set("forceAttach", om.valueToTree(this.getForceAttach()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.ServerGroupAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServerGroupAttachmentProps.Jsii$Proxy that = (ServerGroupAttachmentProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (!serverGroups.equals(that.serverGroups)) return false;
            return this.forceAttach != null ? this.forceAttach.equals(that.forceAttach) : that.forceAttach == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.serverGroups.hashCode());
            result = 31 * result + (this.forceAttach != null ? this.forceAttach.hashCode() : 0);
            return result;
        }
    }
}
