package com.aliyun.ros.cdk.flink;

/**
 * Properties for defining a <code>Member</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.116Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.flink.$Module.class, fqn = "@alicloud/ros-cdk-flink.MemberProps")
@software.amazon.jsii.Jsii.Proxy(MemberProps.Jsii$Proxy.class)
public interface MemberProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property member: The user ID of the member.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMember();

    /**
     * Property namespace: The project space name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     * Property role: The role of the member.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRole();

    /**
     * Property workspace: The work space ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspace();

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
        java.lang.Object member;
        java.lang.Object namespace;
        java.lang.Object role;
        java.lang.Object workspace;

        /**
         * Sets the value of {@link MemberProps#getMember}
         * @param member Property member: The user ID of the member. This parameter is required.
         * @return {@code this}
         */
        public Builder member(java.lang.String member) {
            this.member = member;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getMember}
         * @param member Property member: The user ID of the member. This parameter is required.
         * @return {@code this}
         */
        public Builder member(com.aliyun.ros.cdk.core.IResolvable member) {
            this.member = member;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getNamespace}
         * @param namespace Property namespace: The project space name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getNamespace}
         * @param namespace Property namespace: The project space name. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getRole}
         * @param role Property role: The role of the member. This parameter is required.
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getRole}
         * @param role Property role: The role of the member. This parameter is required.
         * @return {@code this}
         */
        public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getWorkspace}
         * @param workspace Property workspace: The work space ID. This parameter is required.
         * @return {@code this}
         */
        public Builder workspace(java.lang.String workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link MemberProps#getWorkspace}
         * @param workspace Property workspace: The work space ID. This parameter is required.
         * @return {@code this}
         */
        public Builder workspace(com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.workspace = workspace;
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
        private final java.lang.Object member;
        private final java.lang.Object namespace;
        private final java.lang.Object role;
        private final java.lang.Object workspace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.member = software.amazon.jsii.Kernel.get(this, "member", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspace = software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.member = java.util.Objects.requireNonNull(builder.member, "member is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.role = java.util.Objects.requireNonNull(builder.role, "role is required");
            this.workspace = java.util.Objects.requireNonNull(builder.workspace, "workspace is required");
        }

        @Override
        public final java.lang.Object getMember() {
            return this.member;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getRole() {
            return this.role;
        }

        @Override
        public final java.lang.Object getWorkspace() {
            return this.workspace;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("member", om.valueToTree(this.getMember()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            data.set("role", om.valueToTree(this.getRole()));
            data.set("workspace", om.valueToTree(this.getWorkspace()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-flink.MemberProps"));
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

            if (!member.equals(that.member)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (!role.equals(that.role)) return false;
            return this.workspace.equals(that.workspace);
        }

        @Override
        public final int hashCode() {
            int result = this.member.hashCode();
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.role.hashCode());
            result = 31 * result + (this.workspace.hashCode());
            return result;
        }
    }
}
