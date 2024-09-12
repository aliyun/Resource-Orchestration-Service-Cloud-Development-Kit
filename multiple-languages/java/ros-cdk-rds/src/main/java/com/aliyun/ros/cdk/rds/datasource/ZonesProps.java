package com.aliyun.ros.cdk.rds.datasource;

/**
 * Properties for defining a <code>Zones</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:30.025Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.ZonesProps")
@software.amazon.jsii.Jsii.Proxy(ZonesProps.Jsii$Proxy.class)
public interface ZonesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property engine: The database engine that is run by the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     * Property category: The RDS edition of the instance.
     * <p>
     * Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     * Property commodityCode: The commodity code of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommodityCode() {
        return null;
    }

    /**
     * Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.
     * <p>
     * Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDispenseMode() {
        return null;
    }

    /**
     * Property engineVersion: The version of the database engine that is run by the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
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
     * Property zoneId: The ID of the zone in which the instance is located.
     * <p>
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
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
        java.lang.Object engine;
        java.lang.Object category;
        java.lang.Object commodityCode;
        java.lang.Object dispenseMode;
        java.lang.Object engineVersion;
        java.lang.Object refreshOptions;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ZonesProps#getEngine}
         * @param engine Property engine: The database engine that is run by the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getEngine}
         * @param engine Property engine: The database engine that is run by the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getCategory}
         * @param category Property category: The RDS edition of the instance.
         *                 Valid values:
         *                 Basic: RDS Basic Edition
         *                 HighAvailability: RDS High-availability Edition
         *                 AlwaysOn: RDS Cluster Edition
         *                 Finance: RDS Enterprise Edition
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getCategory}
         * @param category Property category: The RDS edition of the instance.
         *                 Valid values:
         *                 Basic: RDS Basic Edition
         *                 HighAvailability: RDS High-availability Edition
         *                 AlwaysOn: RDS Cluster Edition
         *                 Finance: RDS Enterprise Edition
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getCommodityCode}
         * @param commodityCode Property commodityCode: The commodity code of the instance.
         * @return {@code this}
         */
        public Builder commodityCode(java.lang.String commodityCode) {
            this.commodityCode = commodityCode;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getCommodityCode}
         * @param commodityCode Property commodityCode: The commodity code of the instance.
         * @return {@code this}
         */
        public Builder commodityCode(com.aliyun.ros.cdk.core.IResolvable commodityCode) {
            this.commodityCode = commodityCode;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getDispenseMode}
         * @param dispenseMode Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.
         *                     Valid values:
         *                     1: returns the zones.
         *                     0: does not return the zones.
         *                     Default value: 0.
         * @return {@code this}
         */
        public Builder dispenseMode(java.lang.String dispenseMode) {
            this.dispenseMode = dispenseMode;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getDispenseMode}
         * @param dispenseMode Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.
         *                     Valid values:
         *                     1: returns the zones.
         *                     0: does not return the zones.
         *                     Default value: 0.
         * @return {@code this}
         */
        public Builder dispenseMode(com.aliyun.ros.cdk.core.IResolvable dispenseMode) {
            this.dispenseMode = dispenseMode;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instance.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getEngineVersion}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instance.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getRefreshOptions}
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
         * Sets the value of {@link ZonesProps#getRefreshOptions}
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
         * Sets the value of {@link ZonesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is located.
         *               If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is located.
         *               If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
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
        private final java.lang.Object engine;
        private final java.lang.Object category;
        private final java.lang.Object commodityCode;
        private final java.lang.Object dispenseMode;
        private final java.lang.Object engineVersion;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commodityCode = software.amazon.jsii.Kernel.get(this, "commodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dispenseMode = software.amazon.jsii.Kernel.get(this, "dispenseMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.category = builder.category;
            this.commodityCode = builder.commodityCode;
            this.dispenseMode = builder.dispenseMode;
            this.engineVersion = builder.engineVersion;
            this.refreshOptions = builder.refreshOptions;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getCommodityCode() {
            return this.commodityCode;
        }

        @Override
        public final java.lang.Object getDispenseMode() {
            return this.dispenseMode;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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

            data.set("engine", om.valueToTree(this.getEngine()));
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getCommodityCode() != null) {
                data.set("commodityCode", om.valueToTree(this.getCommodityCode()));
            }
            if (this.getDispenseMode() != null) {
                data.set("dispenseMode", om.valueToTree(this.getDispenseMode()));
            }
            if (this.getEngineVersion() != null) {
                data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.datasource.ZonesProps"));
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

            if (!engine.equals(that.engine)) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.commodityCode != null ? !this.commodityCode.equals(that.commodityCode) : that.commodityCode != null) return false;
            if (this.dispenseMode != null ? !this.dispenseMode.equals(that.dispenseMode) : that.dispenseMode != null) return false;
            if (this.engineVersion != null ? !this.engineVersion.equals(that.engineVersion) : that.engineVersion != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.engine.hashCode();
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.commodityCode != null ? this.commodityCode.hashCode() : 0);
            result = 31 * result + (this.dispenseMode != null ? this.dispenseMode.hashCode() : 0);
            result = 31 * result + (this.engineVersion != null ? this.engineVersion.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
