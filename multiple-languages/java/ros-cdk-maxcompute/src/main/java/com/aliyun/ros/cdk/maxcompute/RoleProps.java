package com.aliyun.ros.cdk.maxcompute;

/**
 * Properties for defining a <code>Role</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.861Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.RoleProps")
@software.amazon.jsii.Jsii.Proxy(RoleProps.Jsii$Proxy.class)
public interface RoleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property projectName: The name of the MaxCompute project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property roleName: The name of the project role.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoleName();

    /**
     * Property type: Role types, MaxCompute provides administrator roles and resource roles.
     * <p>
     * Valid values:
     * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
     * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcl() {
        return null;
    }

    /**
     * Property policy: The document of the policy.
     * <p>
     * This parameter is not required if an access-control list (ACL) is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RoleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RoleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RoleProps> {
        java.lang.Object projectName;
        java.lang.Object roleName;
        java.lang.Object type;
        java.lang.Object acl;
        java.lang.Object policy;

        /**
         * Sets the value of {@link RoleProps#getProjectName}
         * @param projectName Property projectName: The name of the MaxCompute project. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getProjectName}
         * @param projectName Property projectName: The name of the MaxCompute project. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getRoleName}
         * @param roleName Property roleName: The name of the project role. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(java.lang.String roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getRoleName}
         * @param roleName Property roleName: The name of the project role. This parameter is required.
         * @return {@code this}
         */
        public Builder roleName(com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.roleName = roleName;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getType}
         * @param type Property type: Role types, MaxCompute provides administrator roles and resource roles. This parameter is required.
         *             Valid values:
         *             Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
         *             Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getType}
         * @param type Property type: Role types, MaxCompute provides administrator roles and resource roles. This parameter is required.
         *             Valid values:
         *             Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
         *             Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getAcl}
         * @param acl Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
         * @return {@code this}
         */
        public Builder acl(com.aliyun.ros.cdk.core.IResolvable acl) {
            this.acl = acl;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getAcl}
         * @param acl Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
         * @return {@code this}
         */
        public Builder acl(com.aliyun.ros.cdk.maxcompute.RosRole.AclProperty acl) {
            this.acl = acl;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getPolicy}
         * @param policy Property policy: The document of the policy.
         *               This parameter is not required if an access-control list (ACL) is used.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RoleProps#getPolicy}
         * @param policy Property policy: The document of the policy.
         *               This parameter is not required if an access-control list (ACL) is used.
         * @return {@code this}
         */
        public Builder policy(java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RoleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RoleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RoleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RoleProps {
        private final java.lang.Object projectName;
        private final java.lang.Object roleName;
        private final java.lang.Object type;
        private final java.lang.Object acl;
        private final java.lang.Object policy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleName = software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acl = software.amazon.jsii.Kernel.get(this, "acl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.roleName = java.util.Objects.requireNonNull(builder.roleName, "roleName is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.acl = builder.acl;
            this.policy = builder.policy;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getRoleName() {
            return this.roleName;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getAcl() {
            return this.acl;
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

            data.set("projectName", om.valueToTree(this.getProjectName()));
            data.set("roleName", om.valueToTree(this.getRoleName()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getAcl() != null) {
                data.set("acl", om.valueToTree(this.getAcl()));
            }
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.RoleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RoleProps.Jsii$Proxy that = (RoleProps.Jsii$Proxy) o;

            if (!projectName.equals(that.projectName)) return false;
            if (!roleName.equals(that.roleName)) return false;
            if (!type.equals(that.type)) return false;
            if (this.acl != null ? !this.acl.equals(that.acl) : that.acl != null) return false;
            return this.policy != null ? this.policy.equals(that.policy) : that.policy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.projectName.hashCode();
            result = 31 * result + (this.roleName.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.acl != null ? this.acl.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            return result;
        }
    }
}
