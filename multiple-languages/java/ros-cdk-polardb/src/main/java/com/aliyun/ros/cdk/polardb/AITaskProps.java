package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>AITask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.339Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.AITaskProps")
@software.amazon.jsii.Jsii.Proxy(AITaskProps.Jsii$Proxy.class)
public interface AITaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbClusterId: The ID of the DB cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property password: The password of the database account that enables the PolarDB for AI function is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * Property username: The database account that enables the PolarDB for AI function is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsername();

    /**
     * Property nodeType: The type of the node.
     * <p>
     * Valid values:
     * DLNode: AI node(default).
     * SearchNode: Search ai node.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AITaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AITaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AITaskProps> {
        java.lang.Object dbClusterId;
        java.lang.Object password;
        java.lang.Object username;
        java.lang.Object nodeType;

        /**
         * Sets the value of {@link AITaskProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the DB cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AITaskProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the DB cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link AITaskProps#getPassword}
         * @param password Property password: The password of the database account that enables the PolarDB for AI function is required. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AITaskProps#getPassword}
         * @param password Property password: The password of the database account that enables the PolarDB for AI function is required. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link AITaskProps#getUsername}
         * @param username Property username: The database account that enables the PolarDB for AI function is required. This parameter is required.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AITaskProps#getUsername}
         * @param username Property username: The database account that enables the PolarDB for AI function is required. This parameter is required.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AITaskProps#getNodeType}
         * @param nodeType Property nodeType: The type of the node.
         *                 Valid values:
         *                 DLNode: AI node(default).
         *                 SearchNode: Search ai node.
         * @return {@code this}
         */
        public Builder nodeType(java.lang.String nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link AITaskProps#getNodeType}
         * @param nodeType Property nodeType: The type of the node.
         *                 Valid values:
         *                 DLNode: AI node(default).
         *                 SearchNode: Search ai node.
         * @return {@code this}
         */
        public Builder nodeType(com.aliyun.ros.cdk.core.IResolvable nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AITaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AITaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AITaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AITaskProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object password;
        private final java.lang.Object username;
        private final java.lang.Object nodeType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeType = software.amazon.jsii.Kernel.get(this, "nodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.username = java.util.Objects.requireNonNull(builder.username, "username is required");
            this.nodeType = builder.nodeType;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getNodeType() {
            return this.nodeType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("password", om.valueToTree(this.getPassword()));
            data.set("username", om.valueToTree(this.getUsername()));
            if (this.getNodeType() != null) {
                data.set("nodeType", om.valueToTree(this.getNodeType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.AITaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AITaskProps.Jsii$Proxy that = (AITaskProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!password.equals(that.password)) return false;
            if (!username.equals(that.username)) return false;
            return this.nodeType != null ? this.nodeType.equals(that.nodeType) : that.nodeType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.username.hashCode());
            result = 31 * result + (this.nodeType != null ? this.nodeType.hashCode() : 0);
            return result;
        }
    }
}
