package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>UserDesktopGroupAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:55.037Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.UserDesktopGroupAdditionProps")
@software.amazon.jsii.Jsii.Proxy(UserDesktopGroupAdditionProps.Jsii$Proxy.class)
public interface UserDesktopGroupAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDesktopGroupId();

    /**
     * Property endUserIds: The regular users to whom you want to assign the desktop group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndUserIds();

    /**
     * @return a {@link Builder} of {@link UserDesktopGroupAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserDesktopGroupAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserDesktopGroupAdditionProps> {
        java.lang.Object desktopGroupId;
        java.lang.Object endUserIds;

        /**
         * Sets the value of {@link UserDesktopGroupAdditionProps#getDesktopGroupId}
         * @param desktopGroupId Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users. This parameter is required.
         * @return {@code this}
         */
        public Builder desktopGroupId(java.lang.String desktopGroupId) {
            this.desktopGroupId = desktopGroupId;
            return this;
        }

        /**
         * Sets the value of {@link UserDesktopGroupAdditionProps#getDesktopGroupId}
         * @param desktopGroupId Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users. This parameter is required.
         * @return {@code this}
         */
        public Builder desktopGroupId(com.aliyun.ros.cdk.core.IResolvable desktopGroupId) {
            this.desktopGroupId = desktopGroupId;
            return this;
        }

        /**
         * Sets the value of {@link UserDesktopGroupAdditionProps#getEndUserIds}
         * @param endUserIds Property endUserIds: The regular users to whom you want to assign the desktop group. This parameter is required.
         * @return {@code this}
         */
        public Builder endUserIds(com.aliyun.ros.cdk.core.IResolvable endUserIds) {
            this.endUserIds = endUserIds;
            return this;
        }

        /**
         * Sets the value of {@link UserDesktopGroupAdditionProps#getEndUserIds}
         * @param endUserIds Property endUserIds: The regular users to whom you want to assign the desktop group. This parameter is required.
         * @return {@code this}
         */
        public Builder endUserIds(java.util.List<? extends java.lang.Object> endUserIds) {
            this.endUserIds = endUserIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserDesktopGroupAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserDesktopGroupAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserDesktopGroupAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserDesktopGroupAdditionProps {
        private final java.lang.Object desktopGroupId;
        private final java.lang.Object endUserIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.desktopGroupId = software.amazon.jsii.Kernel.get(this, "desktopGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endUserIds = software.amazon.jsii.Kernel.get(this, "endUserIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.desktopGroupId = java.util.Objects.requireNonNull(builder.desktopGroupId, "desktopGroupId is required");
            this.endUserIds = java.util.Objects.requireNonNull(builder.endUserIds, "endUserIds is required");
        }

        @Override
        public final java.lang.Object getDesktopGroupId() {
            return this.desktopGroupId;
        }

        @Override
        public final java.lang.Object getEndUserIds() {
            return this.endUserIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("desktopGroupId", om.valueToTree(this.getDesktopGroupId()));
            data.set("endUserIds", om.valueToTree(this.getEndUserIds()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.UserDesktopGroupAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserDesktopGroupAdditionProps.Jsii$Proxy that = (UserDesktopGroupAdditionProps.Jsii$Proxy) o;

            if (!desktopGroupId.equals(that.desktopGroupId)) return false;
            return this.endUserIds.equals(that.endUserIds);
        }

        @Override
        public final int hashCode() {
            int result = this.desktopGroupId.hashCode();
            result = 31 * result + (this.endUserIds.hashCode());
            return result;
        }
    }
}
