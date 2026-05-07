package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosAttackPathSensitiveAssetConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosAttackPathSensitiveAssetConfigProps.Jsii$Proxy.class)
public interface RosAttackPathSensitiveAssetConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttackPathAssetList();

    /**
     * @return a {@link Builder} of {@link RosAttackPathSensitiveAssetConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAttackPathSensitiveAssetConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAttackPathSensitiveAssetConfigProps> {
        java.lang.Object attackPathAssetList;

        /**
         * Sets the value of {@link RosAttackPathSensitiveAssetConfigProps#getAttackPathAssetList}
         * @param attackPathAssetList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder attackPathAssetList(com.aliyun.ros.cdk.core.IResolvable attackPathAssetList) {
            this.attackPathAssetList = attackPathAssetList;
            return this;
        }

        /**
         * Sets the value of {@link RosAttackPathSensitiveAssetConfigProps#getAttackPathAssetList}
         * @param attackPathAssetList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder attackPathAssetList(java.util.List<? extends java.lang.Object> attackPathAssetList) {
            this.attackPathAssetList = attackPathAssetList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAttackPathSensitiveAssetConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAttackPathSensitiveAssetConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAttackPathSensitiveAssetConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAttackPathSensitiveAssetConfigProps {
        private final java.lang.Object attackPathAssetList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.attackPathAssetList = software.amazon.jsii.Kernel.get(this, "attackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.attackPathAssetList = java.util.Objects.requireNonNull(builder.attackPathAssetList, "attackPathAssetList is required");
        }

        @Override
        public final java.lang.Object getAttackPathAssetList() {
            return this.attackPathAssetList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("attackPathAssetList", om.valueToTree(this.getAttackPathAssetList()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAttackPathSensitiveAssetConfigProps.Jsii$Proxy that = (RosAttackPathSensitiveAssetConfigProps.Jsii$Proxy) o;

            return this.attackPathAssetList.equals(that.attackPathAssetList);
        }

        @Override
        public final int hashCode() {
            int result = this.attackPathAssetList.hashCode();
            return result;
        }
    }
}
