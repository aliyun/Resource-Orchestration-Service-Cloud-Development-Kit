package com.aliyun.ros.cdk.ess.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ESS::ScalingGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:35.576Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.ScalingGroupsProps")
@software.amazon.jsii.Jsii.Proxy(ScalingGroupsProps.Jsii$Proxy.class)
public interface ScalingGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupType: The type of instances that are managed by the scaling group.
     * <p>
     * Valid values:
     * ECS: the Elastic Compute Service (ECS) instances
     * ECI: the elastic container instances
     * Default value: ECS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupType() {
        return null;
    }

    /**
     * Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupIds() {
        return null;
    }

    /**
     * Property scalingGroupNames: The name of scaling group that you want to query.
     * <p>
     * Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupNames() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScalingGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScalingGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScalingGroupsProps> {
        java.lang.Object groupType;
        java.lang.Object scalingGroupIds;
        java.lang.Object scalingGroupNames;

        /**
         * Sets the value of {@link ScalingGroupsProps#getGroupType}
         * @param groupType Property groupType: The type of instances that are managed by the scaling group.
         *                  Valid values:
         *                  ECS: the Elastic Compute Service (ECS) instances
         *                  ECI: the elastic container instances
         *                  Default value: ECS.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupsProps#getGroupType}
         * @param groupType Property groupType: The type of instances that are managed by the scaling group.
         *                  Valid values:
         *                  ECS: the Elastic Compute Service (ECS) instances
         *                  ECI: the elastic container instances
         *                  Default value: ECS.
         * @return {@code this}
         */
        public Builder groupType(com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupsProps#getScalingGroupIds}
         * @param scalingGroupIds Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
         * @return {@code this}
         */
        public Builder scalingGroupIds(com.aliyun.ros.cdk.core.IResolvable scalingGroupIds) {
            this.scalingGroupIds = scalingGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupsProps#getScalingGroupIds}
         * @param scalingGroupIds Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
         * @return {@code this}
         */
        public Builder scalingGroupIds(java.util.List<? extends java.lang.Object> scalingGroupIds) {
            this.scalingGroupIds = scalingGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupsProps#getScalingGroupNames}
         * @param scalingGroupNames Property scalingGroupNames: The name of scaling group that you want to query.
         *                          Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
         * @return {@code this}
         */
        public Builder scalingGroupNames(com.aliyun.ros.cdk.core.IResolvable scalingGroupNames) {
            this.scalingGroupNames = scalingGroupNames;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupsProps#getScalingGroupNames}
         * @param scalingGroupNames Property scalingGroupNames: The name of scaling group that you want to query.
         *                          Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
         * @return {@code this}
         */
        public Builder scalingGroupNames(java.util.List<? extends java.lang.Object> scalingGroupNames) {
            this.scalingGroupNames = scalingGroupNames;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScalingGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScalingGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScalingGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingGroupsProps {
        private final java.lang.Object groupType;
        private final java.lang.Object scalingGroupIds;
        private final java.lang.Object scalingGroupNames;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupIds = software.amazon.jsii.Kernel.get(this, "scalingGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupNames = software.amazon.jsii.Kernel.get(this, "scalingGroupNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupType = builder.groupType;
            this.scalingGroupIds = builder.scalingGroupIds;
            this.scalingGroupNames = builder.scalingGroupNames;
        }

        @Override
        public final java.lang.Object getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.Object getScalingGroupIds() {
            return this.scalingGroupIds;
        }

        @Override
        public final java.lang.Object getScalingGroupNames() {
            return this.scalingGroupNames;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupType() != null) {
                data.set("groupType", om.valueToTree(this.getGroupType()));
            }
            if (this.getScalingGroupIds() != null) {
                data.set("scalingGroupIds", om.valueToTree(this.getScalingGroupIds()));
            }
            if (this.getScalingGroupNames() != null) {
                data.set("scalingGroupNames", om.valueToTree(this.getScalingGroupNames()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.datasource.ScalingGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScalingGroupsProps.Jsii$Proxy that = (ScalingGroupsProps.Jsii$Proxy) o;

            if (this.groupType != null ? !this.groupType.equals(that.groupType) : that.groupType != null) return false;
            if (this.scalingGroupIds != null ? !this.scalingGroupIds.equals(that.scalingGroupIds) : that.scalingGroupIds != null) return false;
            return this.scalingGroupNames != null ? this.scalingGroupNames.equals(that.scalingGroupNames) : that.scalingGroupNames == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupType != null ? this.groupType.hashCode() : 0;
            result = 31 * result + (this.scalingGroupIds != null ? this.scalingGroupIds.hashCode() : 0);
            result = 31 * result + (this.scalingGroupNames != null ? this.scalingGroupNames.hashCode() : 0);
            return result;
        }
    }
}
