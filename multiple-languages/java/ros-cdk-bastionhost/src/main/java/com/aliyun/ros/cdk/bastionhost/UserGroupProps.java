package com.aliyun.ros.cdk.bastionhost;

/**
 * Properties for defining a <code>UserGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.061Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.UserGroupProps")
@software.amazon.jsii.Jsii.Proxy(UserGroupProps.Jsii$Proxy.class)
public interface UserGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the BastionHost instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property userGroupName: The name of the user group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserGroupName();

    /**
     * Property comment: The comment of the user group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UserGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserGroupProps> {
        java.lang.Object instanceId;
        java.lang.Object userGroupName;
        java.lang.Object comment;

        /**
         * Sets the value of {@link UserGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the BastionHost instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link UserGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the BastionHost instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link UserGroupProps#getUserGroupName}
         * @param userGroupName Property userGroupName: The name of the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder userGroupName(java.lang.String userGroupName) {
            this.userGroupName = userGroupName;
            return this;
        }

        /**
         * Sets the value of {@link UserGroupProps#getUserGroupName}
         * @param userGroupName Property userGroupName: The name of the user group. This parameter is required.
         * @return {@code this}
         */
        public Builder userGroupName(com.aliyun.ros.cdk.core.IResolvable userGroupName) {
            this.userGroupName = userGroupName;
            return this;
        }

        /**
         * Sets the value of {@link UserGroupProps#getComment}
         * @param comment Property comment: The comment of the user group.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link UserGroupProps#getComment}
         * @param comment Property comment: The comment of the user group.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserGroupProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object userGroupName;
        private final java.lang.Object comment;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userGroupName = software.amazon.jsii.Kernel.get(this, "userGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.userGroupName = java.util.Objects.requireNonNull(builder.userGroupName, "userGroupName is required");
            this.comment = builder.comment;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getUserGroupName() {
            return this.userGroupName;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("userGroupName", om.valueToTree(this.getUserGroupName()));
            if (this.getComment() != null) {
                data.set("comment", om.valueToTree(this.getComment()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bastionhost.UserGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserGroupProps.Jsii$Proxy that = (UserGroupProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!userGroupName.equals(that.userGroupName)) return false;
            return this.comment != null ? this.comment.equals(that.comment) : that.comment == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.userGroupName.hashCode());
            result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
            return result;
        }
    }
}
