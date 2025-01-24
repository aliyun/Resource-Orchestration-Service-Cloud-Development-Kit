package com.aliyun.ros.cdk.ehpc.datasource;

/**
 * Properties for defining a <code>Nodes</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:39.123Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.datasource.NodesProps")
@software.amazon.jsii.Jsii.Proxy(NodesProps.Jsii$Proxy.class)
public interface NodesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property hostName: The name of the node.
     * <p>
     * You can perform a fuzzy search. MySQL regular expressions are supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     * Property hostNamePrefix: The prefix of the hostname.
     * <p>
     * You can query nodes that have a specified prefix.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostNamePrefix() {
        return null;
    }

    /**
     * Property hostNameSuffix: The suffix of the hostname.
     * <p>
     * You can query nodes that have a specified suffix.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostNameSuffix() {
        return null;
    }

    /**
     * Property privateIpAddress: The private IP address of the node.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property role: The type of the node.
     * <p>
     * Valid values:
     * Manager: management node
     * Login: logon node
     * Compute: compute node
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NodesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NodesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NodesProps> {
        java.lang.Object clusterId;
        java.lang.Object hostName;
        java.lang.Object hostNamePrefix;
        java.lang.Object hostNameSuffix;
        java.lang.Object privateIpAddress;
        java.lang.Object refreshOptions;
        java.lang.Object role;

        /**
         * Sets the value of {@link NodesProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getHostName}
         * @param hostName Property hostName: The name of the node.
         *                 You can perform a fuzzy search. MySQL regular expressions are supported.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getHostName}
         * @param hostName Property hostName: The name of the node.
         *                 You can perform a fuzzy search. MySQL regular expressions are supported.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getHostNamePrefix}
         * @param hostNamePrefix Property hostNamePrefix: The prefix of the hostname.
         *                       You can query nodes that have a specified prefix.
         * @return {@code this}
         */
        public Builder hostNamePrefix(java.lang.String hostNamePrefix) {
            this.hostNamePrefix = hostNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getHostNamePrefix}
         * @param hostNamePrefix Property hostNamePrefix: The prefix of the hostname.
         *                       You can query nodes that have a specified prefix.
         * @return {@code this}
         */
        public Builder hostNamePrefix(com.aliyun.ros.cdk.core.IResolvable hostNamePrefix) {
            this.hostNamePrefix = hostNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getHostNameSuffix}
         * @param hostNameSuffix Property hostNameSuffix: The suffix of the hostname.
         *                       You can query nodes that have a specified suffix.
         * @return {@code this}
         */
        public Builder hostNameSuffix(java.lang.String hostNameSuffix) {
            this.hostNameSuffix = hostNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getHostNameSuffix}
         * @param hostNameSuffix Property hostNameSuffix: The suffix of the hostname.
         *                       You can query nodes that have a specified suffix.
         * @return {@code this}
         */
        public Builder hostNameSuffix(com.aliyun.ros.cdk.core.IResolvable hostNameSuffix) {
            this.hostNameSuffix = hostNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the node.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the node.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getRole}
         * @param role Property role: The type of the node.
         *             Valid values:
         *             Manager: management node
         *             Login: logon node
         *             Compute: compute node
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link NodesProps#getRole}
         * @param role Property role: The type of the node.
         *             Valid values:
         *             Manager: management node
         *             Login: logon node
         *             Compute: compute node
         * @return {@code this}
         */
        public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
            this.role = role;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NodesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NodesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NodesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NodesProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object hostName;
        private final java.lang.Object hostNamePrefix;
        private final java.lang.Object hostNameSuffix;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object role;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostNamePrefix = software.amazon.jsii.Kernel.get(this, "hostNamePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostNameSuffix = software.amazon.jsii.Kernel.get(this, "hostNameSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.hostName = builder.hostName;
            this.hostNamePrefix = builder.hostNamePrefix;
            this.hostNameSuffix = builder.hostNameSuffix;
            this.privateIpAddress = builder.privateIpAddress;
            this.refreshOptions = builder.refreshOptions;
            this.role = builder.role;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getHostNamePrefix() {
            return this.hostNamePrefix;
        }

        @Override
        public final java.lang.Object getHostNameSuffix() {
            return this.hostNameSuffix;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getRole() {
            return this.role;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getHostNamePrefix() != null) {
                data.set("hostNamePrefix", om.valueToTree(this.getHostNamePrefix()));
            }
            if (this.getHostNameSuffix() != null) {
                data.set("hostNameSuffix", om.valueToTree(this.getHostNameSuffix()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getRole() != null) {
                data.set("role", om.valueToTree(this.getRole()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.datasource.NodesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NodesProps.Jsii$Proxy that = (NodesProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.hostNamePrefix != null ? !this.hostNamePrefix.equals(that.hostNamePrefix) : that.hostNamePrefix != null) return false;
            if (this.hostNameSuffix != null ? !this.hostNameSuffix.equals(that.hostNameSuffix) : that.hostNameSuffix != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.role != null ? this.role.equals(that.role) : that.role == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.hostNamePrefix != null ? this.hostNamePrefix.hashCode() : 0);
            result = 31 * result + (this.hostNameSuffix != null ? this.hostNameSuffix.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
            return result;
        }
    }
}
