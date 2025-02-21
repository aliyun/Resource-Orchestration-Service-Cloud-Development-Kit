package com.aliyun.ros.cdk.rds.datasource;

/**
 * Properties for defining a <code>RosZones</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.752Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.RosZonesProps")
@software.amazon.jsii.Jsii.Proxy(RosZonesProps.Jsii$Proxy.class)
public interface RosZonesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommodityCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDispenseMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosZonesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosZonesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosZonesProps> {
        java.lang.Object engine;
        java.lang.Object category;
        java.lang.Object commodityCode;
        java.lang.Object dispenseMode;
        java.lang.Object engineVersion;
        java.lang.Object refreshOptions;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosZonesProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getCommodityCode}
         * @param commodityCode the value to be set.
         * @return {@code this}
         */
        public Builder commodityCode(java.lang.String commodityCode) {
            this.commodityCode = commodityCode;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getCommodityCode}
         * @param commodityCode the value to be set.
         * @return {@code this}
         */
        public Builder commodityCode(com.aliyun.ros.cdk.core.IResolvable commodityCode) {
            this.commodityCode = commodityCode;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getDispenseMode}
         * @param dispenseMode the value to be set.
         * @return {@code this}
         */
        public Builder dispenseMode(java.lang.String dispenseMode) {
            this.dispenseMode = dispenseMode;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getDispenseMode}
         * @param dispenseMode the value to be set.
         * @return {@code this}
         */
        public Builder dispenseMode(com.aliyun.ros.cdk.core.IResolvable dispenseMode) {
            this.dispenseMode = dispenseMode;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getEngineVersion}
         * @param engineVersion the value to be set.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getEngineVersion}
         * @param engineVersion the value to be set.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosZonesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosZonesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosZonesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosZonesProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.datasource.RosZonesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosZonesProps.Jsii$Proxy that = (RosZonesProps.Jsii$Proxy) o;

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
