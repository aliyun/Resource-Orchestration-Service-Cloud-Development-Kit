package com.aliyun.ros.cdk.mongodb.datasource;

/**
 * Properties for defining a <code>DATASOURCE::MONGODB::InstanceClasses</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.349Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.datasource.InstanceClassesProps")
@software.amazon.jsii.Jsii.Proxy(InstanceClassesProps.Jsii$Proxy.class)
public interface InstanceClassesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbType: The database engine type of the instance.
     * <p>
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbType() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method of the instance.
     * <p>
     * Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the instance.
     * <p>
     * You can call the DescribeRegions operation to query the most recent zone list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceClassesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceClassesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceClassesProps> {
        java.lang.Object dbType;
        java.lang.Object instanceChargeType;
        java.lang.Object resourceGroupId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstanceClassesProps#getDbType}
         * @param dbType Property dbType: The database engine type of the instance.
         *               normal: replica set instance
         *               sharding: sharded cluster instance
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getDbType}
         * @param dbType Property dbType: The database engine type of the instance.
         *               normal: replica set instance
         *               sharding: sharded cluster instance
         * @return {@code this}
         */
        public Builder dbType(com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance.
         *                           Default value: PostPaid. Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance.
         *                           Default value: PostPaid. Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
         *               You can call the DescribeRegions operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceClassesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the instance.
         *               You can call the DescribeRegions operation to query the most recent zone list.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceClassesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceClassesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceClassesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceClassesProps {
        private final java.lang.Object dbType;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbType = software.amazon.jsii.Kernel.get(this, "dbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbType = builder.dbType;
            this.instanceChargeType = builder.instanceChargeType;
            this.resourceGroupId = builder.resourceGroupId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDbType() {
            return this.dbType;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDbType() != null) {
                data.set("dbType", om.valueToTree(this.getDbType()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.datasource.InstanceClassesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceClassesProps.Jsii$Proxy that = (InstanceClassesProps.Jsii$Proxy) o;

            if (this.dbType != null ? !this.dbType.equals(that.dbType) : that.dbType != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbType != null ? this.dbType.hashCode() : 0;
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
