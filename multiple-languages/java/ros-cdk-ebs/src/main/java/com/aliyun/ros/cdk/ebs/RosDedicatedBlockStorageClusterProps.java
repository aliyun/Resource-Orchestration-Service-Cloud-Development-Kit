package com.aliyun.ros.cdk.ebs;

/**
 * Properties for defining a <code>RosDedicatedBlockStorageCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.691Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.RosDedicatedBlockStorageClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosDedicatedBlockStorageClusterProps.Jsii$Proxy.class)
public interface RosDedicatedBlockStorageClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAzone();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCapacity();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbscName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodUnit();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDedicatedBlockStorageClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDedicatedBlockStorageClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDedicatedBlockStorageClusterProps> {
        java.lang.Object azone;
        java.lang.Object capacity;
        java.lang.Object dbscName;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object type;
        java.lang.Object resourceGroupId;
        java.lang.Object tag;

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getAzone}
         * @param azone the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder azone(java.lang.String azone) {
            this.azone = azone;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getAzone}
         * @param azone the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder azone(com.aliyun.ros.cdk.core.IResolvable azone) {
            this.azone = azone;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getCapacity}
         * @param capacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder capacity(java.lang.Number capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getCapacity}
         * @param capacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder capacity(com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getDbscName}
         * @param dbscName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbscName(java.lang.String dbscName) {
            this.dbscName = dbscName;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getDbscName}
         * @param dbscName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbscName(com.aliyun.ros.cdk.core.IResolvable dbscName) {
            this.dbscName = dbscName;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedBlockStorageClusterProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDedicatedBlockStorageClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDedicatedBlockStorageClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDedicatedBlockStorageClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDedicatedBlockStorageClusterProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.RosDedicatedBlockStorageClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDedicatedBlockStorageClusterProps.Jsii$Proxy that = (RosDedicatedBlockStorageClusterProps.Jsii$Proxy) o;

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
