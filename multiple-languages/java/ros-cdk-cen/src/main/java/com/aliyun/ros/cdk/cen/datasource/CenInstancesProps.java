package com.aliyun.ros.cdk.cen.datasource;

/**
 * Properties for defining a <code>CenInstances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:50.046Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.CenInstancesProps")
@software.amazon.jsii.Jsii.Proxy(CenInstancesProps.Jsii$Proxy.class)
public interface CenInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property filter: Filter value when querying resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilter() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CenInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenInstancesProps> {
        java.lang.Object filter;

        /**
         * Sets the value of {@link CenInstancesProps#getFilter}
         * @param filter Property filter: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filter(com.aliyun.ros.cdk.core.IResolvable filter) {
            this.filter = filter;
            return this;
        }

        /**
         * Sets the value of {@link CenInstancesProps#getFilter}
         * @param filter Property filter: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filter(java.util.List<? extends java.lang.Object> filter) {
            this.filter = filter;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CenInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CenInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenInstancesProps {
        private final java.lang.Object filter;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.filter = software.amazon.jsii.Kernel.get(this, "filter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.filter = builder.filter;
        }

        @Override
        public final java.lang.Object getFilter() {
            return this.filter;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getFilter() != null) {
                data.set("filter", om.valueToTree(this.getFilter()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.datasource.CenInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenInstancesProps.Jsii$Proxy that = (CenInstancesProps.Jsii$Proxy) o;

            return this.filter != null ? this.filter.equals(that.filter) : that.filter == null;
        }

        @Override
        public final int hashCode() {
            int result = this.filter != null ? this.filter.hashCode() : 0;
            return result;
        }
    }
}
