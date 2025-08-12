package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>RosFwSwitch</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.568Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosFwSwitchProps")
@software.amazon.jsii.Jsii.Proxy(RosFwSwitchProps.Jsii$Proxy.class)
public interface RosFwSwitchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpaddrList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypeList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFwSwitchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFwSwitchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFwSwitchProps> {
        java.lang.Object ipaddrList;
        java.lang.Object regionList;
        java.lang.Object resourceTypeList;

        /**
         * Sets the value of {@link RosFwSwitchProps#getIpaddrList}
         * @param ipaddrList the value to be set.
         * @return {@code this}
         */
        public Builder ipaddrList(java.util.List<? extends java.lang.Object> ipaddrList) {
            this.ipaddrList = ipaddrList;
            return this;
        }

        /**
         * Sets the value of {@link RosFwSwitchProps#getIpaddrList}
         * @param ipaddrList the value to be set.
         * @return {@code this}
         */
        public Builder ipaddrList(com.aliyun.ros.cdk.core.IResolvable ipaddrList) {
            this.ipaddrList = ipaddrList;
            return this;
        }

        /**
         * Sets the value of {@link RosFwSwitchProps#getRegionList}
         * @param regionList the value to be set.
         * @return {@code this}
         */
        public Builder regionList(java.util.List<? extends java.lang.Object> regionList) {
            this.regionList = regionList;
            return this;
        }

        /**
         * Sets the value of {@link RosFwSwitchProps#getRegionList}
         * @param regionList the value to be set.
         * @return {@code this}
         */
        public Builder regionList(com.aliyun.ros.cdk.core.IResolvable regionList) {
            this.regionList = regionList;
            return this;
        }

        /**
         * Sets the value of {@link RosFwSwitchProps#getResourceTypeList}
         * @param resourceTypeList the value to be set.
         * @return {@code this}
         */
        public Builder resourceTypeList(java.util.List<? extends java.lang.Object> resourceTypeList) {
            this.resourceTypeList = resourceTypeList;
            return this;
        }

        /**
         * Sets the value of {@link RosFwSwitchProps#getResourceTypeList}
         * @param resourceTypeList the value to be set.
         * @return {@code this}
         */
        public Builder resourceTypeList(com.aliyun.ros.cdk.core.IResolvable resourceTypeList) {
            this.resourceTypeList = resourceTypeList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFwSwitchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFwSwitchProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFwSwitchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFwSwitchProps {
        private final java.lang.Object ipaddrList;
        private final java.lang.Object regionList;
        private final java.lang.Object resourceTypeList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipaddrList = software.amazon.jsii.Kernel.get(this, "ipaddrList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionList = software.amazon.jsii.Kernel.get(this, "regionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceTypeList = software.amazon.jsii.Kernel.get(this, "resourceTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipaddrList = builder.ipaddrList;
            this.regionList = builder.regionList;
            this.resourceTypeList = builder.resourceTypeList;
        }

        @Override
        public final java.lang.Object getIpaddrList() {
            return this.ipaddrList;
        }

        @Override
        public final java.lang.Object getRegionList() {
            return this.regionList;
        }

        @Override
        public final java.lang.Object getResourceTypeList() {
            return this.resourceTypeList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getIpaddrList() != null) {
                data.set("ipaddrList", om.valueToTree(this.getIpaddrList()));
            }
            if (this.getRegionList() != null) {
                data.set("regionList", om.valueToTree(this.getRegionList()));
            }
            if (this.getResourceTypeList() != null) {
                data.set("resourceTypeList", om.valueToTree(this.getResourceTypeList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosFwSwitchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFwSwitchProps.Jsii$Proxy that = (RosFwSwitchProps.Jsii$Proxy) o;

            if (this.ipaddrList != null ? !this.ipaddrList.equals(that.ipaddrList) : that.ipaddrList != null) return false;
            if (this.regionList != null ? !this.regionList.equals(that.regionList) : that.regionList != null) return false;
            return this.resourceTypeList != null ? this.resourceTypeList.equals(that.resourceTypeList) : that.resourceTypeList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipaddrList != null ? this.ipaddrList.hashCode() : 0;
            result = 31 * result + (this.regionList != null ? this.regionList.hashCode() : 0);
            result = 31 * result + (this.resourceTypeList != null ? this.resourceTypeList.hashCode() : 0);
            return result;
        }
    }
}
