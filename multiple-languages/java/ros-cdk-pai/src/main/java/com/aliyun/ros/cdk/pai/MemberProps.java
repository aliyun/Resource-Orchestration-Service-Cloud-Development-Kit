package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>Member</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.393Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.MemberProps")
@software.amazon.jsii.Jsii.Proxy(MemberProps.Jsii$Proxy.class)
public interface MemberProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property roles: The list of roles.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoles();

    /**
     * Property userId: User ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserId();

    /**
     * Property workspaceId: Workspace ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     * @return a {@link Builder} of {@link MemberProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MemberProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MemberProps> {
        java.lang.Object roles;
        java.lang.Object userId;
        java.lang.Object workspaceId;

        /**
         * Sets the value of {@link MemberProps#getRoles}
         * @param roles Property roles: The list of roles. This parameter is required.
         * @return {@code this}
         */
        public Builder roles(com.aliyun.ros.cdk.core.IResolvable roles) {
            this.roles = roles;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getRoles}
         * @param roles Property roles: The list of roles. This parameter is required.
         * @return {@code this}
         */
        public Builder roles(java.util.List<? extends java.lang.Object> roles) {
            this.roles = roles;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getUserId}
         * @param userId Property userId: User ID. This parameter is required.
         * @return {@code this}
         */
        public Builder userId(java.lang.String userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getUserId}
         * @param userId Property userId: User ID. This parameter is required.
         * @return {@code this}
         */
        public Builder userId(com.aliyun.ros.cdk.core.IResolvable userId) {
            this.userId = userId;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: Workspace ID. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: Workspace ID. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MemberProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MemberProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MemberProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MemberProps {
        private final java.lang.Object roles;
        private final java.lang.Object userId;
        private final java.lang.Object workspaceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.roles = software.amazon.jsii.Kernel.get(this, "roles", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userId = software.amazon.jsii.Kernel.get(this, "userId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.roles = java.util.Objects.requireNonNull(builder.roles, "roles is required");
            this.userId = java.util.Objects.requireNonNull(builder.userId, "userId is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
        }

        @Override
        public final java.lang.Object getRoles() {
            return this.roles;
        }

        @Override
        public final java.lang.Object getUserId() {
            return this.userId;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("roles", om.valueToTree(this.getRoles()));
            data.set("userId", om.valueToTree(this.getUserId()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.MemberProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MemberProps.Jsii$Proxy that = (MemberProps.Jsii$Proxy) o;

            if (!roles.equals(that.roles)) return false;
            if (!userId.equals(that.userId)) return false;
            return this.workspaceId.equals(that.workspaceId);
        }

        @Override
        public final int hashCode() {
            int result = this.roles.hashCode();
            result = 31 * result + (this.userId.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            return result;
        }
    }
}
