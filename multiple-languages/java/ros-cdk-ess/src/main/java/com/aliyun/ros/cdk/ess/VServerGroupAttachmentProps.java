package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>VServerGroupAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:27.337Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.VServerGroupAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(VServerGroupAttachmentProps.Jsii$Proxy.class)
public interface VServerGroupAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property vServerGroups: A list of vserver groups attached on scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVServerGroups();

    /**
     * Property forceAttach: If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group.
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
     * @return a {@link Builder} of {@link VServerGroupAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VServerGroupAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VServerGroupAttachmentProps> {
        java.lang.Object scalingGroupId;
        java.lang.Object vServerGroups;
        java.lang.Object forceAttach;

        /**
         * Sets the value of {@link VServerGroupAttachmentProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupAttachmentProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupAttachmentProps#getVServerGroups}
         * @param vServerGroups Property vServerGroups: A list of vserver groups attached on scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroups(com.aliyun.ros.cdk.core.IResolvable vServerGroups) {
            this.vServerGroups = vServerGroups;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupAttachmentProps#getVServerGroups}
         * @param vServerGroups Property vServerGroups: A list of vserver groups attached on scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroups(java.util.List<? extends java.lang.Object> vServerGroups) {
            this.vServerGroups = vServerGroups;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupAttachmentProps#getForceAttach}
         * @param forceAttach Property forceAttach: If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group.
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
         * Sets the value of {@link VServerGroupAttachmentProps#getForceAttach}
         * @param forceAttach Property forceAttach: If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group.
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
         * @return a new instance of {@link VServerGroupAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VServerGroupAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VServerGroupAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VServerGroupAttachmentProps {
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object vServerGroups;
        private final java.lang.Object forceAttach;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vServerGroups = software.amazon.jsii.Kernel.get(this, "vServerGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceAttach = software.amazon.jsii.Kernel.get(this, "forceAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.vServerGroups = java.util.Objects.requireNonNull(builder.vServerGroups, "vServerGroups is required");
            this.forceAttach = builder.forceAttach;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getVServerGroups() {
            return this.vServerGroups;
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
            data.set("vServerGroups", om.valueToTree(this.getVServerGroups()));
            if (this.getForceAttach() != null) {
                data.set("forceAttach", om.valueToTree(this.getForceAttach()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.VServerGroupAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VServerGroupAttachmentProps.Jsii$Proxy that = (VServerGroupAttachmentProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (!vServerGroups.equals(that.vServerGroups)) return false;
            return this.forceAttach != null ? this.forceAttach.equals(that.forceAttach) : that.forceAttach == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.vServerGroups.hashCode());
            result = 31 * result + (this.forceAttach != null ? this.forceAttach.hashCode() : 0);
            return result;
        }
    }
}
