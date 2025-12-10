package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>RosDBProxy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.588Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBProxyProps")
@software.amazon.jsii.Jsii.Proxy(RosDBProxyProps.Jsii$Proxy.class)
public interface RosDBProxyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbProxyInstanceNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbProxyInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbProxyNodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPersistentConnectionStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBProxyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBProxyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBProxyProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object dbProxyInstanceNum;
        java.lang.Object dbProxyInstanceType;
        java.lang.Object dbProxyNodes;
        java.lang.Object persistentConnectionStatus;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosDBProxyProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getDbProxyInstanceNum}
         * @param dbProxyInstanceNum the value to be set.
         * @return {@code this}
         */
        public Builder dbProxyInstanceNum(java.lang.Number dbProxyInstanceNum) {
            this.dbProxyInstanceNum = dbProxyInstanceNum;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getDbProxyInstanceNum}
         * @param dbProxyInstanceNum the value to be set.
         * @return {@code this}
         */
        public Builder dbProxyInstanceNum(com.aliyun.ros.cdk.core.IResolvable dbProxyInstanceNum) {
            this.dbProxyInstanceNum = dbProxyInstanceNum;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getDbProxyInstanceType}
         * @param dbProxyInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder dbProxyInstanceType(java.lang.String dbProxyInstanceType) {
            this.dbProxyInstanceType = dbProxyInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getDbProxyInstanceType}
         * @param dbProxyInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder dbProxyInstanceType(com.aliyun.ros.cdk.core.IResolvable dbProxyInstanceType) {
            this.dbProxyInstanceType = dbProxyInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getDbProxyNodes}
         * @param dbProxyNodes the value to be set.
         * @return {@code this}
         */
        public Builder dbProxyNodes(com.aliyun.ros.cdk.core.IResolvable dbProxyNodes) {
            this.dbProxyNodes = dbProxyNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getDbProxyNodes}
         * @param dbProxyNodes the value to be set.
         * @return {@code this}
         */
        public Builder dbProxyNodes(java.util.List<? extends java.lang.Object> dbProxyNodes) {
            this.dbProxyNodes = dbProxyNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getPersistentConnectionStatus}
         * @param persistentConnectionStatus the value to be set.
         * @return {@code this}
         */
        public Builder persistentConnectionStatus(java.lang.String persistentConnectionStatus) {
            this.persistentConnectionStatus = persistentConnectionStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getPersistentConnectionStatus}
         * @param persistentConnectionStatus the value to be set.
         * @return {@code this}
         */
        public Builder persistentConnectionStatus(com.aliyun.ros.cdk.core.IResolvable persistentConnectionStatus) {
            this.persistentConnectionStatus = persistentConnectionStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBProxyProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBProxyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBProxyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBProxyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBProxyProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object dbProxyInstanceNum;
        private final java.lang.Object dbProxyInstanceType;
        private final java.lang.Object dbProxyNodes;
        private final java.lang.Object persistentConnectionStatus;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbProxyInstanceNum = software.amazon.jsii.Kernel.get(this, "dbProxyInstanceNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbProxyInstanceType = software.amazon.jsii.Kernel.get(this, "dbProxyInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbProxyNodes = software.amazon.jsii.Kernel.get(this, "dbProxyNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.persistentConnectionStatus = software.amazon.jsii.Kernel.get(this, "persistentConnectionStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.dbProxyInstanceNum = builder.dbProxyInstanceNum;
            this.dbProxyInstanceType = builder.dbProxyInstanceType;
            this.dbProxyNodes = builder.dbProxyNodes;
            this.persistentConnectionStatus = builder.persistentConnectionStatus;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getDbProxyInstanceNum() {
            return this.dbProxyInstanceNum;
        }

        @Override
        public final java.lang.Object getDbProxyInstanceType() {
            return this.dbProxyInstanceType;
        }

        @Override
        public final java.lang.Object getDbProxyNodes() {
            return this.dbProxyNodes;
        }

        @Override
        public final java.lang.Object getPersistentConnectionStatus() {
            return this.persistentConnectionStatus;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getDbProxyInstanceNum() != null) {
                data.set("dbProxyInstanceNum", om.valueToTree(this.getDbProxyInstanceNum()));
            }
            if (this.getDbProxyInstanceType() != null) {
                data.set("dbProxyInstanceType", om.valueToTree(this.getDbProxyInstanceType()));
            }
            if (this.getDbProxyNodes() != null) {
                data.set("dbProxyNodes", om.valueToTree(this.getDbProxyNodes()));
            }
            if (this.getPersistentConnectionStatus() != null) {
                data.set("persistentConnectionStatus", om.valueToTree(this.getPersistentConnectionStatus()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBProxyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBProxyProps.Jsii$Proxy that = (RosDBProxyProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.dbProxyInstanceNum != null ? !this.dbProxyInstanceNum.equals(that.dbProxyInstanceNum) : that.dbProxyInstanceNum != null) return false;
            if (this.dbProxyInstanceType != null ? !this.dbProxyInstanceType.equals(that.dbProxyInstanceType) : that.dbProxyInstanceType != null) return false;
            if (this.dbProxyNodes != null ? !this.dbProxyNodes.equals(that.dbProxyNodes) : that.dbProxyNodes != null) return false;
            if (this.persistentConnectionStatus != null ? !this.persistentConnectionStatus.equals(that.persistentConnectionStatus) : that.persistentConnectionStatus != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.dbProxyInstanceNum != null ? this.dbProxyInstanceNum.hashCode() : 0);
            result = 31 * result + (this.dbProxyInstanceType != null ? this.dbProxyInstanceType.hashCode() : 0);
            result = 31 * result + (this.dbProxyNodes != null ? this.dbProxyNodes.hashCode() : 0);
            result = 31 * result + (this.persistentConnectionStatus != null ? this.persistentConnectionStatus.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
