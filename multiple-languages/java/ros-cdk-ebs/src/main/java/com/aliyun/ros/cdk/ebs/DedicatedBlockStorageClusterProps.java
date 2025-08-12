package com.aliyun.ros.cdk.ebs;

/**
 * Properties for defining a <code>DedicatedBlockStorageCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.899Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.DedicatedBlockStorageClusterProps")
@software.amazon.jsii.Jsii.Proxy(DedicatedBlockStorageClusterProps.Jsii$Proxy.class)
public interface DedicatedBlockStorageClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property azone: The ID of the zone in which to create the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAzone();

    /**
     * Property capacity: The capacity of the dedicated block storage cluster.
     * <p>
     * Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCapacity();

    /**
     * Property dbscName: The name of the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbscName();

    /**
     * Property period: The subscription duration of the dedicated block storage cluster.
     * <p>
     * Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property periodUnit: The unit of the subscription duration specified by Period.
     * <p>
     * Set the value to Month.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit();

    /**
     * Property type: The type of the dedicated block storage cluster.
     * <p>
     * Valid values:
     * Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
     * Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
     * Default value: Premium.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tag: Tags of dedicated block storage cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DedicatedBlockStorageClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DedicatedBlockStorageClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DedicatedBlockStorageClusterProps> {
        java.lang.Object azone;
        java.lang.Object capacity;
        java.lang.Object dbscName;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object type;
        java.lang.Object resourceGroupId;
        java.lang.Object tag;

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getAzone}
         * @param azone Property azone: The ID of the zone in which to create the dedicated block storage cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder azone(java.lang.String azone) {
            this.azone = azone;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getAzone}
         * @param azone Property azone: The ID of the zone in which to create the dedicated block storage cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder azone(com.aliyun.ros.cdk.core.IResolvable azone) {
            this.azone = azone;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getCapacity}
         * @param capacity Property capacity: The capacity of the dedicated block storage cluster. This parameter is required.
         *                 Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
         * @return {@code this}
         */
        public Builder capacity(java.lang.Number capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getCapacity}
         * @param capacity Property capacity: The capacity of the dedicated block storage cluster. This parameter is required.
         *                 Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
         * @return {@code this}
         */
        public Builder capacity(com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getDbscName}
         * @param dbscName Property dbscName: The name of the dedicated block storage cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbscName(java.lang.String dbscName) {
            this.dbscName = dbscName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getDbscName}
         * @param dbscName Property dbscName: The name of the dedicated block storage cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbscName(com.aliyun.ros.cdk.core.IResolvable dbscName) {
            this.dbscName = dbscName;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getPeriod}
         * @param period Property period: The subscription duration of the dedicated block storage cluster. This parameter is required.
         *               Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getPeriod}
         * @param period Property period: The subscription duration of the dedicated block storage cluster. This parameter is required.
         *               Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration specified by Period. This parameter is required.
         *                   Set the value to Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration specified by Period. This parameter is required.
         *                   Set the value to Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getType}
         * @param type Property type: The type of the dedicated block storage cluster. This parameter is required.
         *             Valid values:
         *             Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
         *             Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
         *             Default value: Premium.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getType}
         * @param type Property type: The type of the dedicated block storage cluster. This parameter is required.
         *             Valid values:
         *             Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
         *             Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
         *             Default value: Premium.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getTag}
         * @param tag Property tag: Tags of dedicated block storage cluster.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link DedicatedBlockStorageClusterProps#getTag}
         * @param tag Property tag: Tags of dedicated block storage cluster.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DedicatedBlockStorageClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DedicatedBlockStorageClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DedicatedBlockStorageClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DedicatedBlockStorageClusterProps {
        private final java.lang.Object azone;
        private final java.lang.Object capacity;
        private final java.lang.Object dbscName;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object type;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object tag;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.azone = software.amazon.jsii.Kernel.get(this, "azone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.capacity = software.amazon.jsii.Kernel.get(this, "capacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbscName = software.amazon.jsii.Kernel.get(this, "dbscName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.azone = java.util.Objects.requireNonNull(builder.azone, "azone is required");
            this.capacity = java.util.Objects.requireNonNull(builder.capacity, "capacity is required");
            this.dbscName = java.util.Objects.requireNonNull(builder.dbscName, "dbscName is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.periodUnit = java.util.Objects.requireNonNull(builder.periodUnit, "periodUnit is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.resourceGroupId = builder.resourceGroupId;
            this.tag = builder.tag;
        }

        @Override
        public final java.lang.Object getAzone() {
            return this.azone;
        }

        @Override
        public final java.lang.Object getCapacity() {
            return this.capacity;
        }

        @Override
        public final java.lang.Object getDbscName() {
            return this.dbscName;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("azone", om.valueToTree(this.getAzone()));
            data.set("capacity", om.valueToTree(this.getCapacity()));
            data.set("dbscName", om.valueToTree(this.getDbscName()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.DedicatedBlockStorageClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DedicatedBlockStorageClusterProps.Jsii$Proxy that = (DedicatedBlockStorageClusterProps.Jsii$Proxy) o;

            if (!azone.equals(that.azone)) return false;
            if (!capacity.equals(that.capacity)) return false;
            if (!dbscName.equals(that.dbscName)) return false;
            if (!period.equals(that.period)) return false;
            if (!periodUnit.equals(that.periodUnit)) return false;
            if (!type.equals(that.type)) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tag != null ? this.tag.equals(that.tag) : that.tag == null;
        }

        @Override
        public final int hashCode() {
            int result = this.azone.hashCode();
            result = 31 * result + (this.capacity.hashCode());
            result = 31 * result + (this.dbscName.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.periodUnit.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            return result;
        }
    }
}
