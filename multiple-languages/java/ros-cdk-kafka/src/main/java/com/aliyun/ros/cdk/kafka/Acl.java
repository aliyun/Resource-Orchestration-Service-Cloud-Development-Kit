package com.aliyun.ros.cdk.kafka;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::KAFKA::Acl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.095Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.Acl")
public class Acl extends com.aliyun.ros.cdk.core.Resource {

    protected Acl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Acl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Acl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.AclProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Acl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.AclProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclResourceType: The resource type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrAclResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Username: The username.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUsername() {
        return software.amazon.jsii.Kernel.get(this, "attrUsername", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.AclProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.AclProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.AclProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kafka.Acl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kafka.Acl> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.kafka.AclProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kafka.AclProps.Builder();
        }

        /**
         * Property aclOperationTypes: The types of operations allowed by the ACL.
         * <p>
         * @return {@code this}
         * @param aclOperationTypes Property aclOperationTypes: The types of operations allowed by the ACL. This parameter is required.
         */
        public Builder aclOperationTypes(final com.aliyun.ros.cdk.core.IResolvable aclOperationTypes) {
            this.props.aclOperationTypes(aclOperationTypes);
            return this;
        }
        /**
         * Property aclOperationTypes: The types of operations allowed by the ACL.
         * <p>
         * @return {@code this}
         * @param aclOperationTypes Property aclOperationTypes: The types of operations allowed by the ACL. This parameter is required.
         */
        public Builder aclOperationTypes(final java.util.List<? extends java.lang.Object> aclOperationTypes) {
            this.props.aclOperationTypes(aclOperationTypes);
            return this;
        }

        /**
         * Property aclResourceName: The resource name.
         * <p>
         * The value can be a topic name, a group ID, a cluster name, or a transaction ID.
         * You can use an asterisk (<em>) to specify the names of all resources of the specified type.
         * Note You can use an asterisk (</em>) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
         * <p>
         * @return {@code this}
         * @param aclResourceName Property aclResourceName: The resource name. This parameter is required.
         */
        public Builder aclResourceName(final java.lang.String aclResourceName) {
            this.props.aclResourceName(aclResourceName);
            return this;
        }
        /**
         * Property aclResourceName: The resource name.
         * <p>
         * The value can be a topic name, a group ID, a cluster name, or a transaction ID.
         * You can use an asterisk (<em>) to specify the names of all resources of the specified type.
         * Note You can use an asterisk (</em>) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
         * <p>
         * @return {@code this}
         * @param aclResourceName Property aclResourceName: The resource name. This parameter is required.
         */
        public Builder aclResourceName(final com.aliyun.ros.cdk.core.IResolvable aclResourceName) {
            this.props.aclResourceName(aclResourceName);
            return this;
        }

        /**
         * Property aclResourcePatternType: The matching mode.
         * <p>
         * Valid values:
         * LITERAL: exact match
         * PREFIXED: prefix match
         * <p>
         * @return {@code this}
         * @param aclResourcePatternType Property aclResourcePatternType: The matching mode. This parameter is required.
         */
        public Builder aclResourcePatternType(final java.lang.String aclResourcePatternType) {
            this.props.aclResourcePatternType(aclResourcePatternType);
            return this;
        }
        /**
         * Property aclResourcePatternType: The matching mode.
         * <p>
         * Valid values:
         * LITERAL: exact match
         * PREFIXED: prefix match
         * <p>
         * @return {@code this}
         * @param aclResourcePatternType Property aclResourcePatternType: The matching mode. This parameter is required.
         */
        public Builder aclResourcePatternType(final com.aliyun.ros.cdk.core.IResolvable aclResourcePatternType) {
            this.props.aclResourcePatternType(aclResourcePatternType);
            return this;
        }

        /**
         * Property aclResourceType: The resource type.
         * <p>
         * Valid values:
         * Topic
         * Group
         * Cluster
         * TransactionalId: transactional ID
         * <p>
         * @return {@code this}
         * @param aclResourceType Property aclResourceType: The resource type. This parameter is required.
         */
        public Builder aclResourceType(final java.lang.String aclResourceType) {
            this.props.aclResourceType(aclResourceType);
            return this;
        }
        /**
         * Property aclResourceType: The resource type.
         * <p>
         * Valid values:
         * Topic
         * Group
         * Cluster
         * TransactionalId: transactional ID
         * <p>
         * @return {@code this}
         * @param aclResourceType Property aclResourceType: The resource type. This parameter is required.
         */
        public Builder aclResourceType(final com.aliyun.ros.cdk.core.IResolvable aclResourceType) {
            this.props.aclResourceType(aclResourceType);
            return this;
        }

        /**
         * Property instanceId: The instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property username: The username.
         * <p>
         * You can use an asterisk (<em>) to specify all usernames.
         * Note You can use an asterisk (</em>) to query the authorized users only after you grant the required permissions to all users.
         * <p>
         * @return {@code this}
         * @param username Property username: The username. This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props.username(username);
            return this;
        }
        /**
         * Property username: The username.
         * <p>
         * You can use an asterisk (<em>) to specify all usernames.
         * Note You can use an asterisk (</em>) to query the authorized users only after you grant the required permissions to all users.
         * <p>
         * @return {@code this}
         * @param username Property username: The username. This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props.username(username);
            return this;
        }

        /**
         * Property aclPermissionType: The authorization method.
         * <p>
         * Valid values:
         * DENY
         * ALLOW
         * Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * <p>
         * @return {@code this}
         * @param aclPermissionType Property aclPermissionType: The authorization method. This parameter is required.
         */
        public Builder aclPermissionType(final java.lang.String aclPermissionType) {
            this.props.aclPermissionType(aclPermissionType);
            return this;
        }
        /**
         * Property aclPermissionType: The authorization method.
         * <p>
         * Valid values:
         * DENY
         * ALLOW
         * Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * <p>
         * @return {@code this}
         * @param aclPermissionType Property aclPermissionType: The authorization method. This parameter is required.
         */
        public Builder aclPermissionType(final com.aliyun.ros.cdk.core.IResolvable aclPermissionType) {
            this.props.aclPermissionType(aclPermissionType);
            return this;
        }

        /**
         * Property host: The source IP address.
         * <p>
         * Note
         * You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
         * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * <p>
         * @return {@code this}
         * @param host Property host: The source IP address. This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }
        /**
         * Property host: The source IP address.
         * <p>
         * Note
         * You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
         * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * <p>
         * @return {@code this}
         * @param host Property host: The source IP address. This parameter is required.
         */
        public Builder host(final com.aliyun.ros.cdk.core.IResolvable host) {
            this.props.host(host);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kafka.Acl}.
         */
        @Override
        public com.aliyun.ros.cdk.kafka.Acl build() {
            return new com.aliyun.ros.cdk.kafka.Acl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
