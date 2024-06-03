package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Zones</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.814Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ZonesProps")
@software.amazon.jsii.Jsii.Proxy(ZonesProps.Jsii$Proxy.class)
public interface ZonesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dataDiskCategory: The category of the data disk.
     * <p>
     * Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskCategory() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method of the resource.
     * <p>
     * For more information, see Billing overview. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property instanceType: The instance type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property ioOptimized: Specifies whether the instance is I/O optimized.
     * <p>
     * Valid values:
     * none: non-I/O optimized
     * optimized: I/O optimized
     * Default value: optimized.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     * Property resourceType: The type of the resource.
     * <p>
     * Valid values:
     * instance: ECS instance
     * disk: cloud disk
     * reservedinstance: reserved instance
     * ddh: dedicated host
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     * Property systemDiskCategory: The category of the system disk.
     * <p>
     * Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ZonesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ZonesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ZonesProps> {
        java.lang.Object dataDiskCategory;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceType;
        java.lang.Object ioOptimized;
        java.lang.Object resourceType;
        java.lang.Object systemDiskCategory;

        /**
         * Sets the value of {@link ZonesProps#getDataDiskCategory}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk.
         *                         Valid values:
         *                         cloud: basic disk
         *                         cloud_efficiency: ultra disk
         *                         cloud_ssd: standard SSD
         *                         ephemeral_ssd: local SSD
         *                         cloud_essd: enhanced SSD (ESSD)
         * @return {@code this}
         */
        public Builder dataDiskCategory(java.lang.String dataDiskCategory) {
            this.dataDiskCategory = dataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getDataDiskCategory}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk.
         *                         Valid values:
         *                         cloud: basic disk
         *                         cloud_efficiency: ultra disk
         *                         cloud_ssd: standard SSD
         *                         ephemeral_ssd: local SSD
         *                         cloud_essd: enhanced SSD (ESSD)
         * @return {@code this}
         */
        public Builder dataDiskCategory(com.aliyun.ros.cdk.core.IResolvable dataDiskCategory) {
            this.dataDiskCategory = dataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the resource.
         *                           For more information, see Billing overview. Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         *                           Default value: PostPaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the resource.
         *                           For more information, see Billing overview. Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         *                           Default value: PostPaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized.
         *                    Valid values:
         *                    none: non-I/O optimized
         *                    optimized: I/O optimized
         *                    Default value: optimized.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized.
         *                    Valid values:
         *                    none: non-I/O optimized
         *                    optimized: I/O optimized
         *                    Default value: optimized.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource.
         *                     Valid values:
         *                     instance: ECS instance
         *                     disk: cloud disk
         *                     reservedinstance: reserved instance
         *                     ddh: dedicated host
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource.
         *                     Valid values:
         *                     instance: ECS instance
         *                     disk: cloud disk
         *                     reservedinstance: reserved instance
         *                     ddh: dedicated host
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk.
         *                           Valid values:
         *                           cloud: basic disk
         *                           cloud_efficiency: ultra disk
         *                           cloud_ssd: standard SSD
         *                           ephemeral_ssd: local SSD
         *                           cloud_essd: enhanced SSD (ESSD)
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk.
         *                           Valid values:
         *                           cloud: basic disk
         *                           cloud_efficiency: ultra disk
         *                           cloud_ssd: standard SSD
         *                           ephemeral_ssd: local SSD
         *                           cloud_essd: enhanced SSD (ESSD)
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ZonesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ZonesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ZonesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZonesProps {
        private final java.lang.Object dataDiskCategory;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceType;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object resourceType;
        private final java.lang.Object systemDiskCategory;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataDiskCategory = software.amazon.jsii.Kernel.get(this, "dataDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataDiskCategory = builder.dataDiskCategory;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceType = builder.instanceType;
            this.ioOptimized = builder.ioOptimized;
            this.resourceType = builder.resourceType;
            this.systemDiskCategory = builder.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getDataDiskCategory() {
            return this.dataDiskCategory;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDataDiskCategory() != null) {
                data.set("dataDiskCategory", om.valueToTree(this.getDataDiskCategory()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.ZonesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ZonesProps.Jsii$Proxy that = (ZonesProps.Jsii$Proxy) o;

            if (this.dataDiskCategory != null ? !this.dataDiskCategory.equals(that.dataDiskCategory) : that.dataDiskCategory != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            return this.systemDiskCategory != null ? this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataDiskCategory != null ? this.dataDiskCategory.hashCode() : 0;
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            return result;
        }
    }
}
