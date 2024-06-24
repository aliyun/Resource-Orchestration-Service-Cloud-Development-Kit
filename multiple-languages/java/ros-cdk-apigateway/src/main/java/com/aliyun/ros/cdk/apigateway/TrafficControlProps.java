package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>TrafficControl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:04.495Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.TrafficControlProps")
@software.amazon.jsii.Jsii.Proxy(TrafficControlProps.Jsii$Proxy.class)
public interface TrafficControlProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property apiDefault: Default API traffic value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiDefault();

    /**
     * Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficControlName();

    /**
     * Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficControlUnit();

    /**
     * Property appDefault: Default APP traffic value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppDefault() {
        return null;
    }

    /**
     * Property description: Description of the traffic control, less than 180 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property special: Special traffic controls.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpecial() {
        return null;
    }

    /**
     * Property userDefault: Default user traffic value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserDefault() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TrafficControlProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TrafficControlProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TrafficControlProps> {
        java.lang.Object apiDefault;
        java.lang.Object trafficControlName;
        java.lang.Object trafficControlUnit;
        java.lang.Object appDefault;
        java.lang.Object description;
        java.lang.Object special;
        java.lang.Object userDefault;

        /**
         * Sets the value of {@link TrafficControlProps#getApiDefault}
         * @param apiDefault Property apiDefault: Default API traffic value. This parameter is required.
         * @return {@code this}
         */
        public Builder apiDefault(java.lang.Number apiDefault) {
            this.apiDefault = apiDefault;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getApiDefault}
         * @param apiDefault Property apiDefault: Default API traffic value. This parameter is required.
         * @return {@code this}
         */
        public Builder apiDefault(com.aliyun.ros.cdk.core.IResolvable apiDefault) {
            this.apiDefault = apiDefault;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getTrafficControlName}
         * @param trafficControlName Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficControlName(java.lang.String trafficControlName) {
            this.trafficControlName = trafficControlName;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getTrafficControlName}
         * @param trafficControlName Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficControlName(com.aliyun.ros.cdk.core.IResolvable trafficControlName) {
            this.trafficControlName = trafficControlName;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getTrafficControlUnit}
         * @param trafficControlUnit Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficControlUnit(java.lang.String trafficControlUnit) {
            this.trafficControlUnit = trafficControlUnit;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getTrafficControlUnit}
         * @param trafficControlUnit Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficControlUnit(com.aliyun.ros.cdk.core.IResolvable trafficControlUnit) {
            this.trafficControlUnit = trafficControlUnit;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getAppDefault}
         * @param appDefault Property appDefault: Default APP traffic value.
         * @return {@code this}
         */
        public Builder appDefault(java.lang.String appDefault) {
            this.appDefault = appDefault;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getAppDefault}
         * @param appDefault Property appDefault: Default APP traffic value.
         * @return {@code this}
         */
        public Builder appDefault(com.aliyun.ros.cdk.core.IResolvable appDefault) {
            this.appDefault = appDefault;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getDescription}
         * @param description Property description: Description of the traffic control, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getDescription}
         * @param description Property description: Description of the traffic control, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getSpecial}
         * @param special Property special: Special traffic controls.
         * @return {@code this}
         */
        public Builder special(com.aliyun.ros.cdk.core.IResolvable special) {
            this.special = special;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getSpecial}
         * @param special Property special: Special traffic controls.
         * @return {@code this}
         */
        public Builder special(java.util.List<? extends java.lang.Object> special) {
            this.special = special;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getUserDefault}
         * @param userDefault Property userDefault: Default user traffic value.
         * @return {@code this}
         */
        public Builder userDefault(java.lang.String userDefault) {
            this.userDefault = userDefault;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlProps#getUserDefault}
         * @param userDefault Property userDefault: Default user traffic value.
         * @return {@code this}
         */
        public Builder userDefault(com.aliyun.ros.cdk.core.IResolvable userDefault) {
            this.userDefault = userDefault;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TrafficControlProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TrafficControlProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TrafficControlProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TrafficControlProps {
        private final java.lang.Object apiDefault;
        private final java.lang.Object trafficControlName;
        private final java.lang.Object trafficControlUnit;
        private final java.lang.Object appDefault;
        private final java.lang.Object description;
        private final java.lang.Object special;
        private final java.lang.Object userDefault;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiDefault = software.amazon.jsii.Kernel.get(this, "apiDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficControlName = software.amazon.jsii.Kernel.get(this, "trafficControlName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficControlUnit = software.amazon.jsii.Kernel.get(this, "trafficControlUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appDefault = software.amazon.jsii.Kernel.get(this, "appDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.special = software.amazon.jsii.Kernel.get(this, "special", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userDefault = software.amazon.jsii.Kernel.get(this, "userDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiDefault = java.util.Objects.requireNonNull(builder.apiDefault, "apiDefault is required");
            this.trafficControlName = java.util.Objects.requireNonNull(builder.trafficControlName, "trafficControlName is required");
            this.trafficControlUnit = java.util.Objects.requireNonNull(builder.trafficControlUnit, "trafficControlUnit is required");
            this.appDefault = builder.appDefault;
            this.description = builder.description;
            this.special = builder.special;
            this.userDefault = builder.userDefault;
        }

        @Override
        public final java.lang.Object getApiDefault() {
            return this.apiDefault;
        }

        @Override
        public final java.lang.Object getTrafficControlName() {
            return this.trafficControlName;
        }

        @Override
        public final java.lang.Object getTrafficControlUnit() {
            return this.trafficControlUnit;
        }

        @Override
        public final java.lang.Object getAppDefault() {
            return this.appDefault;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getSpecial() {
            return this.special;
        }

        @Override
        public final java.lang.Object getUserDefault() {
            return this.userDefault;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiDefault", om.valueToTree(this.getApiDefault()));
            data.set("trafficControlName", om.valueToTree(this.getTrafficControlName()));
            data.set("trafficControlUnit", om.valueToTree(this.getTrafficControlUnit()));
            if (this.getAppDefault() != null) {
                data.set("appDefault", om.valueToTree(this.getAppDefault()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSpecial() != null) {
                data.set("special", om.valueToTree(this.getSpecial()));
            }
            if (this.getUserDefault() != null) {
                data.set("userDefault", om.valueToTree(this.getUserDefault()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.TrafficControlProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TrafficControlProps.Jsii$Proxy that = (TrafficControlProps.Jsii$Proxy) o;

            if (!apiDefault.equals(that.apiDefault)) return false;
            if (!trafficControlName.equals(that.trafficControlName)) return false;
            if (!trafficControlUnit.equals(that.trafficControlUnit)) return false;
            if (this.appDefault != null ? !this.appDefault.equals(that.appDefault) : that.appDefault != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.special != null ? !this.special.equals(that.special) : that.special != null) return false;
            return this.userDefault != null ? this.userDefault.equals(that.userDefault) : that.userDefault == null;
        }

        @Override
        public final int hashCode() {
            int result = this.apiDefault.hashCode();
            result = 31 * result + (this.trafficControlName.hashCode());
            result = 31 * result + (this.trafficControlUnit.hashCode());
            result = 31 * result + (this.appDefault != null ? this.appDefault.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.special != null ? this.special.hashCode() : 0);
            result = 31 * result + (this.userDefault != null ? this.userDefault.hashCode() : 0);
            return result;
        }
    }
}
