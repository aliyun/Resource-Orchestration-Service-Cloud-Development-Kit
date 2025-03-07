package com.aliyun.ros.cdk.cen.datasource;

/**
 * Properties for defining a <code>CenBandwidthPackages</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.CenBandwidthPackagesProps")
@software.amazon.jsii.Jsii.Proxy(CenBandwidthPackagesProps.Jsii$Proxy.class)
public interface CenBandwidthPackagesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property filter: Filter value when querying resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilter() {
        return null;
    }

    /**
     * Property includeReservationData: Specifies whether to include renewal data.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeReservationData() {
        return null;
    }

    /**
     * Property isOrKey: The logical operator between the filter conditions.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsOrKey() {
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
     * @return a {@link Builder} of {@link CenBandwidthPackagesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenBandwidthPackagesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenBandwidthPackagesProps> {
        java.lang.Object filter;
        java.lang.Object includeReservationData;
        java.lang.Object isOrKey;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link CenBandwidthPackagesProps#getFilter}
         * @param filter Property filter: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filter(com.aliyun.ros.cdk.core.IResolvable filter) {
            this.filter = filter;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackagesProps#getFilter}
         * @param filter Property filter: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filter(java.util.List<? extends java.lang.Object> filter) {
            this.filter = filter;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackagesProps#getIncludeReservationData}
         * @param includeReservationData Property includeReservationData: Specifies whether to include renewal data.
         * @return {@code this}
         */
        public Builder includeReservationData(java.lang.Boolean includeReservationData) {
            this.includeReservationData = includeReservationData;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackagesProps#getIncludeReservationData}
         * @param includeReservationData Property includeReservationData: Specifies whether to include renewal data.
         * @return {@code this}
         */
        public Builder includeReservationData(com.aliyun.ros.cdk.core.IResolvable includeReservationData) {
            this.includeReservationData = includeReservationData;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackagesProps#getIsOrKey}
         * @param isOrKey Property isOrKey: The logical operator between the filter conditions.
         * @return {@code this}
         */
        public Builder isOrKey(java.lang.Boolean isOrKey) {
            this.isOrKey = isOrKey;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackagesProps#getIsOrKey}
         * @param isOrKey Property isOrKey: The logical operator between the filter conditions.
         * @return {@code this}
         */
        public Builder isOrKey(com.aliyun.ros.cdk.core.IResolvable isOrKey) {
            this.isOrKey = isOrKey;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackagesProps#getRefreshOptions}
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
         * Sets the value of {@link CenBandwidthPackagesProps#getRefreshOptions}
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
         * Builds the configured instance.
         * @return a new instance of {@link CenBandwidthPackagesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenBandwidthPackagesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CenBandwidthPackagesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenBandwidthPackagesProps {
        private final java.lang.Object filter;
        private final java.lang.Object includeReservationData;
        private final java.lang.Object isOrKey;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.filter = software.amazon.jsii.Kernel.get(this, "filter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.includeReservationData = software.amazon.jsii.Kernel.get(this, "includeReservationData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isOrKey = software.amazon.jsii.Kernel.get(this, "isOrKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.filter = builder.filter;
            this.includeReservationData = builder.includeReservationData;
            this.isOrKey = builder.isOrKey;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getFilter() {
            return this.filter;
        }

        @Override
        public final java.lang.Object getIncludeReservationData() {
            return this.includeReservationData;
        }

        @Override
        public final java.lang.Object getIsOrKey() {
            return this.isOrKey;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getFilter() != null) {
                data.set("filter", om.valueToTree(this.getFilter()));
            }
            if (this.getIncludeReservationData() != null) {
                data.set("includeReservationData", om.valueToTree(this.getIncludeReservationData()));
            }
            if (this.getIsOrKey() != null) {
                data.set("isOrKey", om.valueToTree(this.getIsOrKey()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.datasource.CenBandwidthPackagesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenBandwidthPackagesProps.Jsii$Proxy that = (CenBandwidthPackagesProps.Jsii$Proxy) o;

            if (this.filter != null ? !this.filter.equals(that.filter) : that.filter != null) return false;
            if (this.includeReservationData != null ? !this.includeReservationData.equals(that.includeReservationData) : that.includeReservationData != null) return false;
            if (this.isOrKey != null ? !this.isOrKey.equals(that.isOrKey) : that.isOrKey != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.filter != null ? this.filter.hashCode() : 0;
            result = 31 * result + (this.includeReservationData != null ? this.includeReservationData.hashCode() : 0);
            result = 31 * result + (this.isOrKey != null ? this.isOrKey.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
