package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>CommonBandwidthPackage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.646Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(CommonBandwidthPackageProps.Jsii$Proxy.class)
public interface CommonBandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommonBandwidthPackageId() {
        return null;
    }

    /**
     * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommonBandwidthPackageName() {
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
     * @return a {@link Builder} of {@link CommonBandwidthPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CommonBandwidthPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CommonBandwidthPackageProps> {
        java.lang.Object commonBandwidthPackageId;
        java.lang.Object commonBandwidthPackageName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link CommonBandwidthPackageProps#getCommonBandwidthPackageId}
         * @param commonBandwidthPackageId Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageId(java.lang.String commonBandwidthPackageId) {
            this.commonBandwidthPackageId = commonBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link CommonBandwidthPackageProps#getCommonBandwidthPackageId}
         * @param commonBandwidthPackageId Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageId) {
            this.commonBandwidthPackageId = commonBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link CommonBandwidthPackageProps#getCommonBandwidthPackageName}
         * @param commonBandwidthPackageName Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageName(java.lang.String commonBandwidthPackageName) {
            this.commonBandwidthPackageName = commonBandwidthPackageName;
            return this;
        }

        /**
         * Sets the value of {@link CommonBandwidthPackageProps#getCommonBandwidthPackageName}
         * @param commonBandwidthPackageName Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageName(com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageName) {
            this.commonBandwidthPackageName = commonBandwidthPackageName;
            return this;
        }

        /**
         * Sets the value of {@link CommonBandwidthPackageProps#getRefreshOptions}
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
         * Sets the value of {@link CommonBandwidthPackageProps#getRefreshOptions}
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
         * @return a new instance of {@link CommonBandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CommonBandwidthPackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CommonBandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CommonBandwidthPackageProps {
        private final java.lang.Object commonBandwidthPackageId;
        private final java.lang.Object commonBandwidthPackageName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commonBandwidthPackageId = software.amazon.jsii.Kernel.get(this, "commonBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commonBandwidthPackageName = software.amazon.jsii.Kernel.get(this, "commonBandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commonBandwidthPackageId = builder.commonBandwidthPackageId;
            this.commonBandwidthPackageName = builder.commonBandwidthPackageName;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getCommonBandwidthPackageId() {
            return this.commonBandwidthPackageId;
        }

        @Override
        public final java.lang.Object getCommonBandwidthPackageName() {
            return this.commonBandwidthPackageName;
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

            if (this.getCommonBandwidthPackageId() != null) {
                data.set("commonBandwidthPackageId", om.valueToTree(this.getCommonBandwidthPackageId()));
            }
            if (this.getCommonBandwidthPackageName() != null) {
                data.set("commonBandwidthPackageName", om.valueToTree(this.getCommonBandwidthPackageName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CommonBandwidthPackageProps.Jsii$Proxy that = (CommonBandwidthPackageProps.Jsii$Proxy) o;

            if (this.commonBandwidthPackageId != null ? !this.commonBandwidthPackageId.equals(that.commonBandwidthPackageId) : that.commonBandwidthPackageId != null) return false;
            if (this.commonBandwidthPackageName != null ? !this.commonBandwidthPackageName.equals(that.commonBandwidthPackageName) : that.commonBandwidthPackageName != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commonBandwidthPackageId != null ? this.commonBandwidthPackageId.hashCode() : 0;
            result = 31 * result + (this.commonBandwidthPackageName != null ? this.commonBandwidthPackageName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
