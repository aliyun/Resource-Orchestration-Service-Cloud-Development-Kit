package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>MachineGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:33.698Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.MachineGroupProps")
@software.amazon.jsii.Jsii.Proxy(MachineGroupProps.Jsii$Proxy.class)
public interface MachineGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupAttribute: Group attribute, default is null.
     * <p>
     * The object value is groupToic and externalName
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupAttribute() {
        return null;
    }

    /**
     * Property groupName: Display name of the group name, the Project only.
     * <p>
     * [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     * Property groupType: MachineGroup type, the value is empty or Armory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupType() {
        return null;
    }

    /**
     * Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMachineIdentifyType() {
        return null;
    }

    /**
     * Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMachineList() {
        return null;
    }

    /**
     * Property projectName: MachineGroup created in project.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MachineGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MachineGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MachineGroupProps> {
        java.lang.Object groupAttribute;
        java.lang.Object groupName;
        java.lang.Object groupType;
        java.lang.Object machineIdentifyType;
        java.lang.Object machineList;
        java.lang.Object projectName;

        /**
         * Sets the value of {@link MachineGroupProps#getGroupAttribute}
         * @param groupAttribute Property groupAttribute: Group attribute, default is null.
         *                       The object value is groupToic and externalName
         * @return {@code this}
         */
        public Builder groupAttribute(java.lang.String groupAttribute) {
            this.groupAttribute = groupAttribute;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getGroupAttribute}
         * @param groupAttribute Property groupAttribute: Group attribute, default is null.
         *                       The object value is groupToic and externalName
         * @return {@code this}
         */
        public Builder groupAttribute(com.aliyun.ros.cdk.core.IResolvable groupAttribute) {
            this.groupAttribute = groupAttribute;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getGroupName}
         * @param groupName Property groupName: Display name of the group name, the Project only.
         *                  [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getGroupName}
         * @param groupName Property groupName: Display name of the group name, the Project only.
         *                  [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getGroupType}
         * @param groupType Property groupType: MachineGroup type, the value is empty or Armory.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getGroupType}
         * @param groupType Property groupType: MachineGroup type, the value is empty or Armory.
         * @return {@code this}
         */
        public Builder groupType(com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getMachineIdentifyType}
         * @param machineIdentifyType Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
         * @return {@code this}
         */
        public Builder machineIdentifyType(java.lang.String machineIdentifyType) {
            this.machineIdentifyType = machineIdentifyType;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getMachineIdentifyType}
         * @param machineIdentifyType Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
         * @return {@code this}
         */
        public Builder machineIdentifyType(com.aliyun.ros.cdk.core.IResolvable machineIdentifyType) {
            this.machineIdentifyType = machineIdentifyType;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getMachineList}
         * @param machineList Property machineList: The machine tag, the value is ip or userdefined-id.
         * @return {@code this}
         */
        public Builder machineList(java.util.List<? extends java.lang.Object> machineList) {
            this.machineList = machineList;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getMachineList}
         * @param machineList Property machineList: The machine tag, the value is ip or userdefined-id.
         * @return {@code this}
         */
        public Builder machineList(com.aliyun.ros.cdk.core.IResolvable machineList) {
            this.machineList = machineList;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getProjectName}
         * @param projectName Property projectName: MachineGroup created in project.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link MachineGroupProps#getProjectName}
         * @param projectName Property projectName: MachineGroup created in project.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MachineGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MachineGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MachineGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MachineGroupProps {
        private final java.lang.Object groupAttribute;
        private final java.lang.Object groupName;
        private final java.lang.Object groupType;
        private final java.lang.Object machineIdentifyType;
        private final java.lang.Object machineList;
        private final java.lang.Object projectName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupAttribute = software.amazon.jsii.Kernel.get(this, "groupAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.machineIdentifyType = software.amazon.jsii.Kernel.get(this, "machineIdentifyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.machineList = software.amazon.jsii.Kernel.get(this, "machineList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupAttribute = builder.groupAttribute;
            this.groupName = builder.groupName;
            this.groupType = builder.groupType;
            this.machineIdentifyType = builder.machineIdentifyType;
            this.machineList = builder.machineList;
            this.projectName = builder.projectName;
        }

        @Override
        public final java.lang.Object getGroupAttribute() {
            return this.groupAttribute;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.Object getMachineIdentifyType() {
            return this.machineIdentifyType;
        }

        @Override
        public final java.lang.Object getMachineList() {
            return this.machineList;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupAttribute() != null) {
                data.set("groupAttribute", om.valueToTree(this.getGroupAttribute()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getGroupType() != null) {
                data.set("groupType", om.valueToTree(this.getGroupType()));
            }
            if (this.getMachineIdentifyType() != null) {
                data.set("machineIdentifyType", om.valueToTree(this.getMachineIdentifyType()));
            }
            if (this.getMachineList() != null) {
                data.set("machineList", om.valueToTree(this.getMachineList()));
            }
            if (this.getProjectName() != null) {
                data.set("projectName", om.valueToTree(this.getProjectName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.MachineGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MachineGroupProps.Jsii$Proxy that = (MachineGroupProps.Jsii$Proxy) o;

            if (this.groupAttribute != null ? !this.groupAttribute.equals(that.groupAttribute) : that.groupAttribute != null) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.groupType != null ? !this.groupType.equals(that.groupType) : that.groupType != null) return false;
            if (this.machineIdentifyType != null ? !this.machineIdentifyType.equals(that.machineIdentifyType) : that.machineIdentifyType != null) return false;
            if (this.machineList != null ? !this.machineList.equals(that.machineList) : that.machineList != null) return false;
            return this.projectName != null ? this.projectName.equals(that.projectName) : that.projectName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupAttribute != null ? this.groupAttribute.hashCode() : 0;
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.groupType != null ? this.groupType.hashCode() : 0);
            result = 31 * result + (this.machineIdentifyType != null ? this.machineIdentifyType.hashCode() : 0);
            result = 31 * result + (this.machineList != null ? this.machineList.hashCode() : 0);
            result = 31 * result + (this.projectName != null ? this.projectName.hashCode() : 0);
            return result;
        }
    }
}
