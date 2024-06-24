package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosRetcodeApp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:04.561Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosRetcodeAppProps")
@software.amazon.jsii.Jsii.Proxy(RosRetcodeAppProps.Jsii$Proxy.class)
public interface RosRetcodeAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetcodeAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetcodeAppType();

    /**
     * @return a {@link Builder} of {@link RosRetcodeAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRetcodeAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRetcodeAppProps> {
        java.lang.Object regionId;
        java.lang.Object retcodeAppName;
        java.lang.Object retcodeAppType;

        /**
         * Sets the value of {@link RosRetcodeAppProps#getRegionId}
         * @param regionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosRetcodeAppProps#getRegionId}
         * @param regionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosRetcodeAppProps#getRetcodeAppName}
         * @param retcodeAppName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppName(java.lang.String retcodeAppName) {
            this.retcodeAppName = retcodeAppName;
            return this;
        }

        /**
         * Sets the value of {@link RosRetcodeAppProps#getRetcodeAppName}
         * @param retcodeAppName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppName(com.aliyun.ros.cdk.core.IResolvable retcodeAppName) {
            this.retcodeAppName = retcodeAppName;
            return this;
        }

        /**
         * Sets the value of {@link RosRetcodeAppProps#getRetcodeAppType}
         * @param retcodeAppType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppType(java.lang.String retcodeAppType) {
            this.retcodeAppType = retcodeAppType;
            return this;
        }

        /**
         * Sets the value of {@link RosRetcodeAppProps#getRetcodeAppType}
         * @param retcodeAppType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppType(com.aliyun.ros.cdk.core.IResolvable retcodeAppType) {
            this.retcodeAppType = retcodeAppType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRetcodeAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRetcodeAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRetcodeAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRetcodeAppProps {
        private final java.lang.Object regionId;
        private final java.lang.Object retcodeAppName;
        private final java.lang.Object retcodeAppType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retcodeAppName = software.amazon.jsii.Kernel.get(this, "retcodeAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retcodeAppType = software.amazon.jsii.Kernel.get(this, "retcodeAppType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.regionId = java.util.Objects.requireNonNull(builder.regionId, "regionId is required");
            this.retcodeAppName = java.util.Objects.requireNonNull(builder.retcodeAppName, "retcodeAppName is required");
            this.retcodeAppType = java.util.Objects.requireNonNull(builder.retcodeAppType, "retcodeAppType is required");
        }

        @Override
        public final java.lang.Object getRegionId() {
            return this.regionId;
        }

        @Override
        public final java.lang.Object getRetcodeAppName() {
            return this.retcodeAppName;
        }

        @Override
        public final java.lang.Object getRetcodeAppType() {
            return this.retcodeAppType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("regionId", om.valueToTree(this.getRegionId()));
            data.set("retcodeAppName", om.valueToTree(this.getRetcodeAppName()));
            data.set("retcodeAppType", om.valueToTree(this.getRetcodeAppType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosRetcodeAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRetcodeAppProps.Jsii$Proxy that = (RosRetcodeAppProps.Jsii$Proxy) o;

            if (!regionId.equals(that.regionId)) return false;
            if (!retcodeAppName.equals(that.retcodeAppName)) return false;
            return this.retcodeAppType.equals(that.retcodeAppType);
        }

        @Override
        public final int hashCode() {
            int result = this.regionId.hashCode();
            result = 31 * result + (this.retcodeAppName.hashCode());
            result = 31 * result + (this.retcodeAppType.hashCode());
            return result;
        }
    }
}
