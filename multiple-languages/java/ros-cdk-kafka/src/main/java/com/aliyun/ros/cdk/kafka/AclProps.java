package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a <code>Acl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:11.627Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.AclProps")
@software.amazon.jsii.Jsii.Proxy(AclProps.Jsii$Proxy.class)
public interface AclProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclOperationTypes: The types of operations allowed by the ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclOperationTypes();

    /**
     * Property aclResourceName: The resource name.
     * <p>
     * The value can be a topic name, a group ID, a cluster name, or a transaction ID.
     * You can use an asterisk (<em>) to specify the names of all resources of the specified type.
     * Note You can use an asterisk (</em>) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclResourceName();

    /**
     * Property aclResourcePatternType: The matching mode.
     * <p>
     * Valid values:
     * LITERAL: exact match
     * PREFIXED: prefix match
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclResourcePatternType();

    /**
     * Property aclResourceType: The resource type.
     * <p>
     * Valid values:
     * Topic
     * Group
     * Cluster
     * TransactionalId: transactional ID
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclResourceType();

    /**
     * Property instanceId: The instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property username: The username.
     * <p>
     * You can use an asterisk (<em>) to specify all usernames.
     * Note You can use an asterisk (</em>) to query the authorized users only after you grant the required permissions to all users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsername();

    /**
     * Property aclPermissionType: The authorization method.
     * <p>
     * Valid values:
     * DENY
     * ALLOW
     * Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclPermissionType() {
        return null;
    }

    /**
     * Property host: The source IP address.
     * <p>
     * Note
     * You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AclProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AclProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AclProps> {
        java.lang.Object aclOperationTypes;
        java.lang.Object aclResourceName;
        java.lang.Object aclResourcePatternType;
        java.lang.Object aclResourceType;
        java.lang.Object instanceId;
        java.lang.Object username;
        java.lang.Object aclPermissionType;
        java.lang.Object host;

        /**
         * Sets the value of {@link AclProps#getAclOperationTypes}
         * @param aclOperationTypes Property aclOperationTypes: The types of operations allowed by the ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder aclOperationTypes(com.aliyun.ros.cdk.core.IResolvable aclOperationTypes) {
            this.aclOperationTypes = aclOperationTypes;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclOperationTypes}
         * @param aclOperationTypes Property aclOperationTypes: The types of operations allowed by the ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder aclOperationTypes(java.util.List<? extends java.lang.Object> aclOperationTypes) {
            this.aclOperationTypes = aclOperationTypes;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclResourceName}
         * @param aclResourceName Property aclResourceName: The resource name. This parameter is required.
         *                        The value can be a topic name, a group ID, a cluster name, or a transaction ID.
         *                        You can use an asterisk (<em>) to specify the names of all resources of the specified type.
         *                        Note You can use an asterisk (</em>) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
         * @return {@code this}
         */
        public Builder aclResourceName(java.lang.String aclResourceName) {
            this.aclResourceName = aclResourceName;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclResourceName}
         * @param aclResourceName Property aclResourceName: The resource name. This parameter is required.
         *                        The value can be a topic name, a group ID, a cluster name, or a transaction ID.
         *                        You can use an asterisk (<em>) to specify the names of all resources of the specified type.
         *                        Note You can use an asterisk (</em>) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
         * @return {@code this}
         */
        public Builder aclResourceName(com.aliyun.ros.cdk.core.IResolvable aclResourceName) {
            this.aclResourceName = aclResourceName;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclResourcePatternType}
         * @param aclResourcePatternType Property aclResourcePatternType: The matching mode. This parameter is required.
         *                               Valid values:
         *                               LITERAL: exact match
         *                               PREFIXED: prefix match
         * @return {@code this}
         */
        public Builder aclResourcePatternType(java.lang.String aclResourcePatternType) {
            this.aclResourcePatternType = aclResourcePatternType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclResourcePatternType}
         * @param aclResourcePatternType Property aclResourcePatternType: The matching mode. This parameter is required.
         *                               Valid values:
         *                               LITERAL: exact match
         *                               PREFIXED: prefix match
         * @return {@code this}
         */
        public Builder aclResourcePatternType(com.aliyun.ros.cdk.core.IResolvable aclResourcePatternType) {
            this.aclResourcePatternType = aclResourcePatternType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclResourceType}
         * @param aclResourceType Property aclResourceType: The resource type. This parameter is required.
         *                        Valid values:
         *                        Topic
         *                        Group
         *                        Cluster
         *                        TransactionalId: transactional ID
         * @return {@code this}
         */
        public Builder aclResourceType(java.lang.String aclResourceType) {
            this.aclResourceType = aclResourceType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclResourceType}
         * @param aclResourceType Property aclResourceType: The resource type. This parameter is required.
         *                        Valid values:
         *                        Topic
         *                        Group
         *                        Cluster
         *                        TransactionalId: transactional ID
         * @return {@code this}
         */
        public Builder aclResourceType(com.aliyun.ros.cdk.core.IResolvable aclResourceType) {
            this.aclResourceType = aclResourceType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getInstanceId}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getInstanceId}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getUsername}
         * @param username Property username: The username. This parameter is required.
         *                 You can use an asterisk (<em>) to specify all usernames.
         *                 Note You can use an asterisk (</em>) to query the authorized users only after you grant the required permissions to all users.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getUsername}
         * @param username Property username: The username. This parameter is required.
         *                 You can use an asterisk (<em>) to specify all usernames.
         *                 Note You can use an asterisk (</em>) to query the authorized users only after you grant the required permissions to all users.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclPermissionType}
         * @param aclPermissionType Property aclPermissionType: The authorization method.
         *                          Valid values:
         *                          DENY
         *                          ALLOW
         *                          Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * @return {@code this}
         */
        public Builder aclPermissionType(java.lang.String aclPermissionType) {
            this.aclPermissionType = aclPermissionType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getAclPermissionType}
         * @param aclPermissionType Property aclPermissionType: The authorization method.
         *                          Valid values:
         *                          DENY
         *                          ALLOW
         *                          Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * @return {@code this}
         */
        public Builder aclPermissionType(com.aliyun.ros.cdk.core.IResolvable aclPermissionType) {
            this.aclPermissionType = aclPermissionType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getHost}
         * @param host Property host: The source IP address.
         *             Note
         *             You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
         *             This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getHost}
         * @param host Property host: The source IP address.
         *             Note
         *             You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
         *             This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * @return {@code this}
         */
        public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
            this.host = host;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AclProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AclProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AclProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AclProps {
        private final java.lang.Object aclOperationTypes;
        private final java.lang.Object aclResourceName;
        private final java.lang.Object aclResourcePatternType;
        private final java.lang.Object aclResourceType;
        private final java.lang.Object instanceId;
        private final java.lang.Object username;
        private final java.lang.Object aclPermissionType;
        private final java.lang.Object host;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclOperationTypes = software.amazon.jsii.Kernel.get(this, "aclOperationTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclResourceName = software.amazon.jsii.Kernel.get(this, "aclResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclResourcePatternType = software.amazon.jsii.Kernel.get(this, "aclResourcePatternType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclResourceType = software.amazon.jsii.Kernel.get(this, "aclResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclPermissionType = software.amazon.jsii.Kernel.get(this, "aclPermissionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclOperationTypes = java.util.Objects.requireNonNull(builder.aclOperationTypes, "aclOperationTypes is required");
            this.aclResourceName = java.util.Objects.requireNonNull(builder.aclResourceName, "aclResourceName is required");
            this.aclResourcePatternType = java.util.Objects.requireNonNull(builder.aclResourcePatternType, "aclResourcePatternType is required");
            this.aclResourceType = java.util.Objects.requireNonNull(builder.aclResourceType, "aclResourceType is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.username = java.util.Objects.requireNonNull(builder.username, "username is required");
            this.aclPermissionType = builder.aclPermissionType;
            this.host = builder.host;
        }

        @Override
        public final java.lang.Object getAclOperationTypes() {
            return this.aclOperationTypes;
        }

        @Override
        public final java.lang.Object getAclResourceName() {
            return this.aclResourceName;
        }

        @Override
        public final java.lang.Object getAclResourcePatternType() {
            return this.aclResourcePatternType;
        }

        @Override
        public final java.lang.Object getAclResourceType() {
            return this.aclResourceType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getAclPermissionType() {
            return this.aclPermissionType;
        }

        @Override
        public final java.lang.Object getHost() {
            return this.host;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclOperationTypes", om.valueToTree(this.getAclOperationTypes()));
            data.set("aclResourceName", om.valueToTree(this.getAclResourceName()));
            data.set("aclResourcePatternType", om.valueToTree(this.getAclResourcePatternType()));
            data.set("aclResourceType", om.valueToTree(this.getAclResourceType()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("username", om.valueToTree(this.getUsername()));
            if (this.getAclPermissionType() != null) {
                data.set("aclPermissionType", om.valueToTree(this.getAclPermissionType()));
            }
            if (this.getHost() != null) {
                data.set("host", om.valueToTree(this.getHost()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.AclProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AclProps.Jsii$Proxy that = (AclProps.Jsii$Proxy) o;

            if (!aclOperationTypes.equals(that.aclOperationTypes)) return false;
            if (!aclResourceName.equals(that.aclResourceName)) return false;
            if (!aclResourcePatternType.equals(that.aclResourcePatternType)) return false;
            if (!aclResourceType.equals(that.aclResourceType)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!username.equals(that.username)) return false;
            if (this.aclPermissionType != null ? !this.aclPermissionType.equals(that.aclPermissionType) : that.aclPermissionType != null) return false;
            return this.host != null ? this.host.equals(that.host) : that.host == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclOperationTypes.hashCode();
            result = 31 * result + (this.aclResourceName.hashCode());
            result = 31 * result + (this.aclResourcePatternType.hashCode());
            result = 31 * result + (this.aclResourceType.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.username.hashCode());
            result = 31 * result + (this.aclPermissionType != null ? this.aclPermissionType.hashCode() : 0);
            result = 31 * result + (this.host != null ? this.host.hashCode() : 0);
            return result;
        }
    }
}
