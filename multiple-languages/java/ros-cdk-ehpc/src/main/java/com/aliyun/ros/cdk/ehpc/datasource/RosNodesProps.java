package com.aliyun.ros.cdk.ehpc.datasource;

/**
 * Properties for defining a <code>RosNodes</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ehpc-nodes
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.343Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.datasource.RosNodesProps")
@software.amazon.jsii.Jsii.Proxy(RosNodesProps.Jsii$Proxy.class)
public interface RosNodesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostNamePrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostNameSuffix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNodesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNodesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNodesProps> {
        java.lang.Object clusterId;
        java.lang.Object hostName;
        java.lang.Object hostNamePrefix;
        java.lang.Object hostNameSuffix;
        java.lang.Object privateIpAddress;
        java.lang.Object refreshOptions;
        java.lang.Object role;

        /**
         * Sets the value of {@link RosNodesProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getHostNamePrefix}
         * @param hostNamePrefix the value to be set.
         * @return {@code this}
         */
        public Builder hostNamePrefix(java.lang.String hostNamePrefix) {
            this.hostNamePrefix = hostNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getHostNamePrefix}
         * @param hostNamePrefix the value to be set.
         * @return {@code this}
         */
        public Builder hostNamePrefix(com.aliyun.ros.cdk.core.IResolvable hostNamePrefix) {
            this.hostNamePrefix = hostNamePrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getHostNameSuffix}
         * @param hostNameSuffix the value to be set.
         * @return {@code this}
         */
        public Builder hostNameSuffix(java.lang.String hostNameSuffix) {
            this.hostNameSuffix = hostNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getHostNameSuffix}
         * @param hostNameSuffix the value to be set.
         * @return {@code this}
         */
        public Builder hostNameSuffix(com.aliyun.ros.cdk.core.IResolvable hostNameSuffix) {
            this.hostNameSuffix = hostNameSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getRole}
         * @param role the value to be set.
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link RosNodesProps#getRole}
         * @param role the value to be set.
         * @return {@code this}
         */
        public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
            this.role = role;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNodesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNodesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNodesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNodesProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.datasource.RosNodesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNodesProps.Jsii$Proxy that = (RosNodesProps.Jsii$Proxy) o;

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
