package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosTrafficMirrorFilters</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.866Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFiltersProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficMirrorFiltersProps.Jsii$Proxy.class)
public interface RosTrafficMirrorFiltersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorFilterName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrafficMirrorFiltersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficMirrorFiltersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficMirrorFiltersProps> {
        java.lang.Object refreshOptions;
        java.lang.Object trafficMirrorFilterName;

        /**
         * Sets the value of {@link RosTrafficMirrorFiltersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFiltersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFiltersProps#getTrafficMirrorFilterName}
         * @param trafficMirrorFilterName the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterName(java.lang.String trafficMirrorFilterName) {
            this.trafficMirrorFilterName = trafficMirrorFilterName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFiltersProps#getTrafficMirrorFilterName}
         * @param trafficMirrorFilterName the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterName(com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterName) {
            this.trafficMirrorFilterName = trafficMirrorFilterName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficMirrorFiltersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficMirrorFiltersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficMirrorFiltersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficMirrorFiltersProps {
        private final java.lang.Object refreshOptions;
        private final java.lang.Object trafficMirrorFilterName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorFilterName = software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.refreshOptions = builder.refreshOptions;
            this.trafficMirrorFilterName = builder.trafficMirrorFilterName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getTrafficMirrorFilterName() {
            return this.trafficMirrorFilterName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getTrafficMirrorFilterName() != null) {
                data.set("trafficMirrorFilterName", om.valueToTree(this.getTrafficMirrorFilterName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFiltersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficMirrorFiltersProps.Jsii$Proxy that = (RosTrafficMirrorFiltersProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.trafficMirrorFilterName != null ? this.trafficMirrorFilterName.equals(that.trafficMirrorFilterName) : that.trafficMirrorFilterName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.trafficMirrorFilterName != null ? this.trafficMirrorFilterName.hashCode() : 0);
            return result;
        }
    }
}
