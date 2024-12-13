package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DiskCategories</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:07.570Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DiskCategoriesProps")
@software.amazon.jsii.Jsii.Proxy(DiskCategoriesProps.Jsii$Proxy.class)
public interface DiskCategoriesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property type: The resource type to query.
     * <p>
     * If you set Type to data,you can specify the InstanceType parameter to disk.
     * If you set Type to system, you must specify the InstanceType parameter.
     * Valid values:
     * system: system disk
     * data: data disk
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property zoneId: The ID of the zone for which to query resources.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property dataDiskCategory: The category of the data disk.
     * <p>
     * Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskCategory() {
        return null;
    }

    /**
     * Property instanceType: The instance type.
     * <p>
     * For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
     * When the Type parameter is set to system or data,you must set the InstanceType parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
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
     * Property systemDiskCategory: The category of the system disk.
     * <p>
     * Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DiskCategoriesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DiskCategoriesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DiskCategoriesProps> {
        java.lang.Object type;
        java.lang.Object zoneId;
        java.lang.Object dataDiskCategory;
        java.lang.Object instanceType;
        java.lang.Object refreshOptions;
        java.lang.Object systemDiskCategory;

        /**
         * Sets the value of {@link DiskCategoriesProps#getType}
         * @param type Property type: The resource type to query. This parameter is required.
         *             If you set Type to data,you can specify the InstanceType parameter to disk.
         *             If you set Type to system, you must specify the InstanceType parameter.
         *             Valid values:
         *             system: system disk
         *             data: data disk
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getType}
         * @param type Property type: The resource type to query. This parameter is required.
         *             If you set Type to data,you can specify the InstanceType parameter to disk.
         *             If you set Type to system, you must specify the InstanceType parameter.
         *             Valid values:
         *             system: system disk
         *             data: data disk
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getDataDiskCategory}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk.
         *                         Valid values:
         *                         cloud: basic disk
         *                         cloud_efficiency: ultra disk
         *                         cloud_ssd: standard SSD
         *                         ephemeral_ssd: local SSD
         *                         cloud_essd: ESSD
         * @return {@code this}
         */
        public Builder dataDiskCategory(java.lang.String dataDiskCategory) {
            this.dataDiskCategory = dataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getDataDiskCategory}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk.
         *                         Valid values:
         *                         cloud: basic disk
         *                         cloud_efficiency: ultra disk
         *                         cloud_ssd: standard SSD
         *                         ephemeral_ssd: local SSD
         *                         cloud_essd: ESSD
         * @return {@code this}
         */
        public Builder dataDiskCategory(com.aliyun.ros.cdk.core.IResolvable dataDiskCategory) {
            this.dataDiskCategory = dataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type.
         *                     For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
         *                     When the Type parameter is set to system or data,you must set the InstanceType parameter.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type.
         *                     For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
         *                     When the Type parameter is set to system or data,you must set the InstanceType parameter.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getRefreshOptions}
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
         * Sets the value of {@link DiskCategoriesProps#getRefreshOptions}
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
         * Sets the value of {@link DiskCategoriesProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk.
         *                           Valid values:
         *                           cloud: basic disk
         *                           cloud_efficiency: ultra disk
         *                           cloud_ssd: standard SSD
         *                           ephemeral_ssd: local SSD
         *                           cloud_essd: ESSD
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link DiskCategoriesProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk.
         *                           Valid values:
         *                           cloud: basic disk
         *                           cloud_efficiency: ultra disk
         *                           cloud_ssd: standard SSD
         *                           ephemeral_ssd: local SSD
         *                           cloud_essd: ESSD
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DiskCategoriesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DiskCategoriesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DiskCategoriesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskCategoriesProps {
        private final java.lang.Object type;
        private final java.lang.Object zoneId;
        private final java.lang.Object dataDiskCategory;
        private final java.lang.Object instanceType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object systemDiskCategory;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataDiskCategory = software.amazon.jsii.Kernel.get(this, "dataDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.dataDiskCategory = builder.dataDiskCategory;
            this.instanceType = builder.instanceType;
            this.refreshOptions = builder.refreshOptions;
            this.systemDiskCategory = builder.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getDataDiskCategory() {
            return this.dataDiskCategory;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("type", om.valueToTree(this.getType()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getDataDiskCategory() != null) {
                data.set("dataDiskCategory", om.valueToTree(this.getDataDiskCategory()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.DiskCategoriesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DiskCategoriesProps.Jsii$Proxy that = (DiskCategoriesProps.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.dataDiskCategory != null ? !this.dataDiskCategory.equals(that.dataDiskCategory) : that.dataDiskCategory != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.systemDiskCategory != null ? this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory == null;
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.dataDiskCategory != null ? this.dataDiskCategory.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            return result;
        }
    }
}
