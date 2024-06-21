package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>RouteEntry</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.769Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RouteEntryProps")
@software.amazon.jsii.Jsii.Proxy(RouteEntryProps.Jsii$Proxy.class)
public interface RouteEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the CEN instance where the route entry is published.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property childInstanceId: The ID of the attached network (VPC or VBR).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceId();

    /**
     * Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceRegionId();

    /**
     * Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceRouteTableId();

    /**
     * Property childInstanceType: The type of the network, value: VPC VBR.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceType();

    /**
     * Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidrBlock();

    /**
     * @return a {@link Builder} of {@link RouteEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouteEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouteEntryProps> {
        java.lang.Object cenId;
        java.lang.Object childInstanceId;
        java.lang.Object childInstanceRegionId;
        java.lang.Object childInstanceRouteTableId;
        java.lang.Object childInstanceType;
        java.lang.Object destinationCidrBlock;

        /**
         * Sets the value of {@link RouteEntryProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance where the route entry is published. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance where the route entry is published. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceId}
         * @param childInstanceId Property childInstanceId: The ID of the attached network (VPC or VBR). This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceId(java.lang.String childInstanceId) {
            this.childInstanceId = childInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceId}
         * @param childInstanceId Property childInstanceId: The ID of the attached network (VPC or VBR). This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceId(com.aliyun.ros.cdk.core.IResolvable childInstanceId) {
            this.childInstanceId = childInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceRegionId}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceRegionId(java.lang.String childInstanceRegionId) {
            this.childInstanceRegionId = childInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceRegionId}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable childInstanceRegionId) {
            this.childInstanceRegionId = childInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceRouteTableId}
         * @param childInstanceRouteTableId Property childInstanceRouteTableId: The route table of the attached VBR or VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceRouteTableId(java.lang.String childInstanceRouteTableId) {
            this.childInstanceRouteTableId = childInstanceRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceRouteTableId}
         * @param childInstanceRouteTableId Property childInstanceRouteTableId: The route table of the attached VBR or VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceRouteTableId(com.aliyun.ros.cdk.core.IResolvable childInstanceRouteTableId) {
            this.childInstanceRouteTableId = childInstanceRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceType}
         * @param childInstanceType Property childInstanceType: The type of the network, value: VPC VBR. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceType(java.lang.String childInstanceType) {
            this.childInstanceType = childInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceType}
         * @param childInstanceType Property childInstanceType: The type of the network, value: VPC VBR. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceType(com.aliyun.ros.cdk.core.IResolvable childInstanceType) {
            this.childInstanceType = childInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getDestinationCidrBlock}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route entry to publish. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getDestinationCidrBlock}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route entry to publish. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouteEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteEntryProps {
        private final java.lang.Object cenId;
        private final java.lang.Object childInstanceId;
        private final java.lang.Object childInstanceRegionId;
        private final java.lang.Object childInstanceRouteTableId;
        private final java.lang.Object childInstanceType;
        private final java.lang.Object destinationCidrBlock;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceId = software.amazon.jsii.Kernel.get(this, "childInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceRegionId = software.amazon.jsii.Kernel.get(this, "childInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceRouteTableId = software.amazon.jsii.Kernel.get(this, "childInstanceRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.childInstanceType = software.amazon.jsii.Kernel.get(this, "childInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.childInstanceId = java.util.Objects.requireNonNull(builder.childInstanceId, "childInstanceId is required");
            this.childInstanceRegionId = java.util.Objects.requireNonNull(builder.childInstanceRegionId, "childInstanceRegionId is required");
            this.childInstanceRouteTableId = java.util.Objects.requireNonNull(builder.childInstanceRouteTableId, "childInstanceRouteTableId is required");
            this.childInstanceType = java.util.Objects.requireNonNull(builder.childInstanceType, "childInstanceType is required");
            this.destinationCidrBlock = java.util.Objects.requireNonNull(builder.destinationCidrBlock, "destinationCidrBlock is required");
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getChildInstanceId() {
            return this.childInstanceId;
        }

        @Override
        public final java.lang.Object getChildInstanceRegionId() {
            return this.childInstanceRegionId;
        }

        @Override
        public final java.lang.Object getChildInstanceRouteTableId() {
            return this.childInstanceRouteTableId;
        }

        @Override
        public final java.lang.Object getChildInstanceType() {
            return this.childInstanceType;
        }

        @Override
        public final java.lang.Object getDestinationCidrBlock() {
            return this.destinationCidrBlock;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("childInstanceId", om.valueToTree(this.getChildInstanceId()));
            data.set("childInstanceRegionId", om.valueToTree(this.getChildInstanceRegionId()));
            data.set("childInstanceRouteTableId", om.valueToTree(this.getChildInstanceRouteTableId()));
            data.set("childInstanceType", om.valueToTree(this.getChildInstanceType()));
            data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RouteEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouteEntryProps.Jsii$Proxy that = (RouteEntryProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!childInstanceId.equals(that.childInstanceId)) return false;
            if (!childInstanceRegionId.equals(that.childInstanceRegionId)) return false;
            if (!childInstanceRouteTableId.equals(that.childInstanceRouteTableId)) return false;
            if (!childInstanceType.equals(that.childInstanceType)) return false;
            return this.destinationCidrBlock.equals(that.destinationCidrBlock);
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.childInstanceId.hashCode());
            result = 31 * result + (this.childInstanceRegionId.hashCode());
            result = 31 * result + (this.childInstanceRouteTableId.hashCode());
            result = 31 * result + (this.childInstanceType.hashCode());
            result = 31 * result + (this.destinationCidrBlock.hashCode());
            return result;
        }
    }
}
