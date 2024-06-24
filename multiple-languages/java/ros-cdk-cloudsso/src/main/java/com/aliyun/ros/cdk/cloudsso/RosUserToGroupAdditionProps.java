package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>RosUserToGroupAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.033Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosUserToGroupAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosUserToGroupAdditionProps.Jsii$Proxy.class)
public interface RosUserToGroupAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserId();

    /**
     * @return a {@link Builder} of {@link RosUserToGroupAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserToGroupAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserToGroupAdditionProps> {
        java.lang.Object directoryId;
        java.lang.Object groupId;
        java.lang.Object userId;

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getDirectoryId}
         * @param directoryId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getUserId}
         * @param userId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userId(java.lang.String userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserToGroupAdditionProps#getUserId}
         * @param userId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userId(com.aliyun.ros.cdk.core.IResolvable userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserToGroupAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserToGroupAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserToGroupAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserToGroupAdditionProps {
        private final java.lang.Object directoryId;
        private final java.lang.Object groupId;
        private final java.lang.Object userId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.userId = java.util.Objects.requireNonNull(builder.userId, "userId is required");
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getUserId() {
            return this.userId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("userId", om.valueToTree(this.getUserId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.RosUserToGroupAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserToGroupAdditionProps.Jsii$Proxy that = (RosUserToGroupAdditionProps.Jsii$Proxy) o;

            if (!directoryId.equals(that.directoryId)) return false;
            if (!groupId.equals(that.groupId)) return false;
            return this.userId.equals(that.userId);
        }

        @Override
        public final int hashCode() {
            int result = this.directoryId.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.userId.hashCode());
            return result;
        }
    }
}
