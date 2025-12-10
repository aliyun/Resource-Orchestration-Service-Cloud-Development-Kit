package com.aliyun.ros.cdk.ice;

/**
 * Properties for defining a <code>RosSearchLib</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.717Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.RosSearchLibProps")
@software.amazon.jsii.Jsii.Proxy(RosSearchLibProps.Jsii$Proxy.class)
public interface RosSearchLibProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSearchLibName();

    /**
     * @return a {@link Builder} of {@link RosSearchLibProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSearchLibProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSearchLibProps> {
        java.lang.Object searchLibName;

        /**
         * Sets the value of {@link RosSearchLibProps#getSearchLibName}
         * @param searchLibName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder searchLibName(java.lang.String searchLibName) {
            this.searchLibName = searchLibName;
            return this;
        }

        /**
         * Sets the value of {@link RosSearchLibProps#getSearchLibName}
         * @param searchLibName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder searchLibName(com.aliyun.ros.cdk.core.IResolvable searchLibName) {
            this.searchLibName = searchLibName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSearchLibProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSearchLibProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSearchLibProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSearchLibProps {
        private final java.lang.Object searchLibName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.searchLibName = software.amazon.jsii.Kernel.get(this, "searchLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.searchLibName = java.util.Objects.requireNonNull(builder.searchLibName, "searchLibName is required");
        }

        @Override
        public final java.lang.Object getSearchLibName() {
            return this.searchLibName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("searchLibName", om.valueToTree(this.getSearchLibName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ice.RosSearchLibProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSearchLibProps.Jsii$Proxy that = (RosSearchLibProps.Jsii$Proxy) o;

            return this.searchLibName.equals(that.searchLibName);
        }

        @Override
        public final int hashCode() {
            int result = this.searchLibName.hashCode();
            return result;
        }
    }
}
