package com.aliyun.ros.cdk.cen.datasource;

/**
 * Properties for defining a <code>DATASOURCE::CEN::TransitRouterRouteTables</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.760Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTablesProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterRouteTablesProps.Jsii$Proxy.class)
public interface TransitRouterRouteTablesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property transitRouterId: The ID of the Enterprise Edition transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId();

    /**
     * Property transitRouterRouteTableIds: The ID of the route table.
     * <p>
     * You can query multiple route tables in each call. Maximum value of N: 20.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableIds() {
        return null;
    }

    /**
     * Property transitRouterRouteTableNames: The name of the route table.
     * <p>
     * You can query multiple route tables in each call. Maximum value of N: 20.
     * Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableNames() {
        return null;
    }

    /**
     * Property transitRouterRouteTableStatus: The state of the route table.
     * <p>
     * Valid values:
     * Creating: The route table is being created.
     * Deleting: The route table is being deleted.
     * Active: The route table is available for use.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableStatus() {
        return null;
    }

    /**
     * Property transitRouterRouteTableType: The type of route table.
     * <p>
     * Valid values:
     * Custom: a custom route table
     * System: the default route table
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteTableType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterRouteTablesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterRouteTablesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterRouteTablesProps> {
        java.lang.Object transitRouterId;
        java.lang.Object transitRouterRouteTableIds;
        java.lang.Object transitRouterRouteTableNames;
        java.lang.Object transitRouterRouteTableStatus;
        java.lang.Object transitRouterRouteTableType;

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: The ID of the Enterprise Edition transit router. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: The ID of the Enterprise Edition transit router. This parameter is required.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableIds}
         * @param transitRouterRouteTableIds Property transitRouterRouteTableIds: The ID of the route table.
         *                                   You can query multiple route tables in each call. Maximum value of N: 20.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableIds(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableIds) {
            this.transitRouterRouteTableIds = transitRouterRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableIds}
         * @param transitRouterRouteTableIds Property transitRouterRouteTableIds: The ID of the route table.
         *                                   You can query multiple route tables in each call. Maximum value of N: 20.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableIds(java.util.List<? extends java.lang.Object> transitRouterRouteTableIds) {
            this.transitRouterRouteTableIds = transitRouterRouteTableIds;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableNames}
         * @param transitRouterRouteTableNames Property transitRouterRouteTableNames: The name of the route table.
         *                                     You can query multiple route tables in each call. Maximum value of N: 20.
         *                                     Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableNames(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableNames) {
            this.transitRouterRouteTableNames = transitRouterRouteTableNames;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableNames}
         * @param transitRouterRouteTableNames Property transitRouterRouteTableNames: The name of the route table.
         *                                     You can query multiple route tables in each call. Maximum value of N: 20.
         *                                     Note If you specify both TransitRouterRouteTableNames.N and TransitRouterRouteTableIds.N, make sure that the specified name and ID belong to the same route table.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableNames(java.util.List<? extends java.lang.Object> transitRouterRouteTableNames) {
            this.transitRouterRouteTableNames = transitRouterRouteTableNames;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableStatus}
         * @param transitRouterRouteTableStatus Property transitRouterRouteTableStatus: The state of the route table.
         *                                      Valid values:
         *                                      Creating: The route table is being created.
         *                                      Deleting: The route table is being deleted.
         *                                      Active: The route table is available for use.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableStatus(java.lang.String transitRouterRouteTableStatus) {
            this.transitRouterRouteTableStatus = transitRouterRouteTableStatus;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableStatus}
         * @param transitRouterRouteTableStatus Property transitRouterRouteTableStatus: The state of the route table.
         *                                      Valid values:
         *                                      Creating: The route table is being created.
         *                                      Deleting: The route table is being deleted.
         *                                      Active: The route table is available for use.
         * @return {@code this}
         */
        public Builder transitRouterRouteTableStatus(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableStatus) {
            this.transitRouterRouteTableStatus = transitRouterRouteTableStatus;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableType}
         * @param transitRouterRouteTableType Property transitRouterRouteTableType: The type of route table.
         *                                    Valid values:
         *                                    Custom: a custom route table
         *                                    System: the default route table
         * @return {@code this}
         */
        public Builder transitRouterRouteTableType(java.lang.String transitRouterRouteTableType) {
            this.transitRouterRouteTableType = transitRouterRouteTableType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterRouteTablesProps#getTransitRouterRouteTableType}
         * @param transitRouterRouteTableType Property transitRouterRouteTableType: The type of route table.
         *                                    Valid values:
         *                                    Custom: a custom route table
         *                                    System: the default route table
         * @return {@code this}
         */
        public Builder transitRouterRouteTableType(com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableType) {
            this.transitRouterRouteTableType = transitRouterRouteTableType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterRouteTablesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterRouteTablesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterRouteTablesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterRouteTablesProps {
        private final java.lang.Object transitRouterId;
        private final java.lang.Object transitRouterRouteTableIds;
        private final java.lang.Object transitRouterRouteTableNames;
        private final java.lang.Object transitRouterRouteTableStatus;
        private final java.lang.Object transitRouterRouteTableType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableIds = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableNames = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableStatus = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterRouteTableType = software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.transitRouterId = java.util.Objects.requireNonNull(builder.transitRouterId, "transitRouterId is required");
            this.transitRouterRouteTableIds = builder.transitRouterRouteTableIds;
            this.transitRouterRouteTableNames = builder.transitRouterRouteTableNames;
            this.transitRouterRouteTableStatus = builder.transitRouterRouteTableStatus;
            this.transitRouterRouteTableType = builder.transitRouterRouteTableType;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableIds() {
            return this.transitRouterRouteTableIds;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableNames() {
            return this.transitRouterRouteTableNames;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableStatus() {
            return this.transitRouterRouteTableStatus;
        }

        @Override
        public final java.lang.Object getTransitRouterRouteTableType() {
            return this.transitRouterRouteTableType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            if (this.getTransitRouterRouteTableIds() != null) {
                data.set("transitRouterRouteTableIds", om.valueToTree(this.getTransitRouterRouteTableIds()));
            }
            if (this.getTransitRouterRouteTableNames() != null) {
                data.set("transitRouterRouteTableNames", om.valueToTree(this.getTransitRouterRouteTableNames()));
            }
            if (this.getTransitRouterRouteTableStatus() != null) {
                data.set("transitRouterRouteTableStatus", om.valueToTree(this.getTransitRouterRouteTableStatus()));
            }
            if (this.getTransitRouterRouteTableType() != null) {
                data.set("transitRouterRouteTableType", om.valueToTree(this.getTransitRouterRouteTableType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.datasource.TransitRouterRouteTablesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterRouteTablesProps.Jsii$Proxy that = (TransitRouterRouteTablesProps.Jsii$Proxy) o;

            if (!transitRouterId.equals(that.transitRouterId)) return false;
            if (this.transitRouterRouteTableIds != null ? !this.transitRouterRouteTableIds.equals(that.transitRouterRouteTableIds) : that.transitRouterRouteTableIds != null) return false;
            if (this.transitRouterRouteTableNames != null ? !this.transitRouterRouteTableNames.equals(that.transitRouterRouteTableNames) : that.transitRouterRouteTableNames != null) return false;
            if (this.transitRouterRouteTableStatus != null ? !this.transitRouterRouteTableStatus.equals(that.transitRouterRouteTableStatus) : that.transitRouterRouteTableStatus != null) return false;
            return this.transitRouterRouteTableType != null ? this.transitRouterRouteTableType.equals(that.transitRouterRouteTableType) : that.transitRouterRouteTableType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.transitRouterId.hashCode();
            result = 31 * result + (this.transitRouterRouteTableIds != null ? this.transitRouterRouteTableIds.hashCode() : 0);
            result = 31 * result + (this.transitRouterRouteTableNames != null ? this.transitRouterRouteTableNames.hashCode() : 0);
            result = 31 * result + (this.transitRouterRouteTableStatus != null ? this.transitRouterRouteTableStatus.hashCode() : 0);
            result = 31 * result + (this.transitRouterRouteTableType != null ? this.transitRouterRouteTableType.hashCode() : 0);
            return result;
        }
    }
}
