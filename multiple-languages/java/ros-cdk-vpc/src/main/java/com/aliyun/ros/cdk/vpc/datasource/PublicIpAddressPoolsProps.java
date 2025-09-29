package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>PublicIpAddressPools</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.878Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolsProps")
@software.amazon.jsii.Jsii.Proxy(PublicIpAddressPoolsProps.Jsii$Proxy.class)
public interface PublicIpAddressPoolsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property isp: The line type.
     * <p>
     * Valid values:
     * BGP (default): BGP (Multi-ISP) lines
     * BGP_PRO: BGP (Multi-ISP) Pro lines
     * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
     * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
     * ChinaTelecom: China Telecom
     * ChinaUnicom: China Unicom
     * ChinaMobile: China Mobile
     * ChinaTelecom_L2: China Telecom L2
     * ChinaUnicom_L2: China Unicom L2
     * ChinaMobile_L2: China Mobile L2
     * If your services are deployed in China East 1 Finance,
     * this parameter is required and you must set the value to BGP_FinanceCloud.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsp() {
        return null;
    }

    /**
     * Property publicIpAddressPoolName: The name of the IP address pool.
     * <p>
     * This parameter is optional. The name must be 1 to 128 characters in length,
     * and can contain digits, periods (.), underscores (_), and hyphens (-).
     * The name must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublicIpAddressPoolName() {
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
     * Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PublicIpAddressPoolsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PublicIpAddressPoolsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PublicIpAddressPoolsProps> {
        java.lang.Object isp;
        java.lang.Object publicIpAddressPoolName;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link PublicIpAddressPoolsProps#getIsp}
         * @param isp Property isp: The line type.
         *            Valid values:
         *            BGP (default): BGP (Multi-ISP) lines
         *            BGP_PRO: BGP (Multi-ISP) Pro lines
         *            For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         *            If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         *            ChinaTelecom: China Telecom
         *            ChinaUnicom: China Unicom
         *            ChinaMobile: China Mobile
         *            ChinaTelecom_L2: China Telecom L2
         *            ChinaUnicom_L2: China Unicom L2
         *            ChinaMobile_L2: China Mobile L2
         *            If your services are deployed in China East 1 Finance,
         *            this parameter is required and you must set the value to BGP_FinanceCloud.
         * @return {@code this}
         */
        public Builder isp(java.lang.String isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolsProps#getIsp}
         * @param isp Property isp: The line type.
         *            Valid values:
         *            BGP (default): BGP (Multi-ISP) lines
         *            BGP_PRO: BGP (Multi-ISP) Pro lines
         *            For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         *            If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         *            ChinaTelecom: China Telecom
         *            ChinaUnicom: China Unicom
         *            ChinaMobile: China Mobile
         *            ChinaTelecom_L2: China Telecom L2
         *            ChinaUnicom_L2: China Unicom L2
         *            ChinaMobile_L2: China Mobile L2
         *            If your services are deployed in China East 1 Finance,
         *            this parameter is required and you must set the value to BGP_FinanceCloud.
         * @return {@code this}
         */
        public Builder isp(com.aliyun.ros.cdk.core.IResolvable isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolsProps#getPublicIpAddressPoolName}
         * @param publicIpAddressPoolName Property publicIpAddressPoolName: The name of the IP address pool.
         *                                This parameter is optional. The name must be 1 to 128 characters in length,
         *                                and can contain digits, periods (.), underscores (_), and hyphens (-).
         *                                The name must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder publicIpAddressPoolName(java.lang.String publicIpAddressPoolName) {
            this.publicIpAddressPoolName = publicIpAddressPoolName;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolsProps#getPublicIpAddressPoolName}
         * @param publicIpAddressPoolName Property publicIpAddressPoolName: The name of the IP address pool.
         *                                This parameter is optional. The name must be 1 to 128 characters in length,
         *                                and can contain digits, periods (.), underscores (_), and hyphens (-).
         *                                The name must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder publicIpAddressPoolName(com.aliyun.ros.cdk.core.IResolvable publicIpAddressPoolName) {
            this.publicIpAddressPoolName = publicIpAddressPoolName;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolsProps#getRefreshOptions}
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
         * Sets the value of {@link PublicIpAddressPoolsProps#getRefreshOptions}
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
         * Sets the value of {@link PublicIpAddressPoolsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PublicIpAddressPoolsProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PublicIpAddressPoolsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PublicIpAddressPoolsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PublicIpAddressPoolsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PublicIpAddressPoolsProps {
        private final java.lang.Object isp;
        private final java.lang.Object publicIpAddressPoolName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.isp = software.amazon.jsii.Kernel.get(this, "isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicIpAddressPoolName = software.amazon.jsii.Kernel.get(this, "publicIpAddressPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.isp = builder.isp;
            this.publicIpAddressPoolName = builder.publicIpAddressPoolName;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getIsp() {
            return this.isp;
        }

        @Override
        public final java.lang.Object getPublicIpAddressPoolName() {
            return this.publicIpAddressPoolName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getIsp() != null) {
                data.set("isp", om.valueToTree(this.getIsp()));
            }
            if (this.getPublicIpAddressPoolName() != null) {
                data.set("publicIpAddressPoolName", om.valueToTree(this.getPublicIpAddressPoolName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PublicIpAddressPoolsProps.Jsii$Proxy that = (PublicIpAddressPoolsProps.Jsii$Proxy) o;

            if (this.isp != null ? !this.isp.equals(that.isp) : that.isp != null) return false;
            if (this.publicIpAddressPoolName != null ? !this.publicIpAddressPoolName.equals(that.publicIpAddressPoolName) : that.publicIpAddressPoolName != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.isp != null ? this.isp.hashCode() : 0;
            result = 31 * result + (this.publicIpAddressPoolName != null ? this.publicIpAddressPoolName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
